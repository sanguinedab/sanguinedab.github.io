"use client";

import { useEffect, useRef, useState } from "react";

// 暂时 mock：无论问什么，都流式输出这句话
const MOCK = "还没想好怎么回答，西咕呗～";
const SPEED = 40; // 每个字符间隔（ms），模拟 SSE 打字机效果

type Msg = { id: number; role: "user" | "ai"; text: string; done: boolean };

export function AiChat({ name }: { name: string }) {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [streamingId, setStreamingId] = useState<number | null>(null);
  const idRef = useRef(0);
  const lenRef = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const hasMsgs = msgs.length > 0;

  // 消息变化时把消息列表滚到底部
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs]);

  // 打字机流式输出
  useEffect(() => {
    if (streamingId === null) return;
    const timer = setInterval(() => {
      lenRef.current += 1;
      const len = lenRef.current;
      setMsgs((prev) =>
        prev.map((m) =>
          m.id === streamingId
            ? { ...m, text: MOCK.slice(0, len), done: len >= MOCK.length }
            : m
        )
      );
      if (lenRef.current >= MOCK.length) {
        clearInterval(timer);
        setStreamingId(null);
      }
    }, SPEED);
    return () => clearInterval(timer);
  }, [streamingId]);

  const send = () => {
    const q = input.trim();
    if (!q || streamingId !== null) return;
    const uid = ++idRef.current;
    const aid = ++idRef.current;
    setMsgs((m) => [
      ...m,
      { id: uid, role: "user", text: q, done: true },
      { id: aid, role: "ai", text: "", done: false },
    ]);
    lenRef.current = 0;
    setStreamingId(aid);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div
      className="mx-auto flex w-full max-w-3xl flex-col"
      style={{ height: "calc(100vh - var(--titlebar-h) - var(--statusbar-h))" }}
    >
      {hasMsgs && (
        <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto py-4 pr-2">
          {msgs.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg border px-4 py-2.5 text-[15px] leading-relaxed ${
                  m.role === "user"
                    ? "border-accent/30 bg-raised text-fg"
                    : "border-line bg-panel text-fg/90"
                }`}
              >
                {m.text}
                {m.role === "ai" && !m.done && (
                  <span className="cursor-blink ml-0.5 text-accent">▌</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        className={`w-full ${
          hasMsgs ? "" : "flex flex-1 flex-col items-center justify-center gap-10"
        }`}
      >
        {!hasMsgs && (
          <h1 className="glow flex items-baseline gap-3 text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            <span aria-hidden className="text-accent">
              ▍
            </span>
            Hi, {name}
          </h1>
        )}

        <div className={`w-full ${hasMsgs ? "" : "max-w-2xl"}`}>
          <div className="flex items-end gap-2 rounded-lg border border-line bg-panel p-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              rows={3}
              placeholder={`问我关于 ${name} 的问题…`}
              className="max-h-40 flex-1 resize-none bg-transparent text-[15px] text-fg placeholder:text-muted/60 focus:outline-none"
            />
            <button
              type="button"
              onClick={send}
              disabled={!input.trim() || streamingId !== null}
              className="shrink-0 self-end rounded border border-line px-4 py-2 text-sm text-accent transition-colors hover:border-accent/60 disabled:cursor-not-allowed disabled:border-line disabled:text-muted"
            >
              发送 ↵
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
