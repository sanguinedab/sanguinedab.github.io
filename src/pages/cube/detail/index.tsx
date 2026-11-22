import { Link, useParams } from "react-router";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa6";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { cubeStages } from "@/data/cube";

export default function CubeStagePage() {
  const { slug } = useParams<{ slug: string }>();
  const stage = cubeStages.find((item) => item.slug === slug);

  usePageTitle(stage ? `${stage.name} · 魔方` : "魔方");

  if (!stage) {
    return (
      <div className="flex flex-col items-center gap-4 py-24 text-center">
        <p className="text-lg font-medium">页面不存在</p>
        <Button asChild variant="outline" size="sm">
          <Link to="/cube">返回魔方</Link>
        </Button>
      </div>
    );
  }

  const copy = async (alg: string) => {
    try {
      await navigator.clipboard.writeText(alg);
      toast("公式已复制");
    } catch {
      toast("复制失败，请手动选择公式");
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 pb-10">
      <Link
        to="/cube"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <FaArrowLeft className="h-3.5 w-3.5" />
        返回魔方
      </Link>

      <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          src={stage.poster}
          alt={`${stage.en} 阶段`}
          className="w-28 shrink-0 rounded-md border object-cover"
        />
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{stage.name}</h1>
            <span className="font-mono text-sm text-muted-foreground">
              {stage.en}
            </span>
            <Badge variant="secondary" className="rounded-sm font-normal">
              {stage.meta}
            </Badge>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {stage.summary}
          </p>
        </div>
      </header>

      <Separator />

      {stage.tips?.length ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">练习要点</h2>
          <ul className="space-y-2">
            {stage.tips.map((tip) => (
              <li
                key={tip}
                className="flex gap-2 text-sm leading-relaxed text-foreground/90"
              >
                <span aria-hidden className="select-none text-muted-foreground">
                  ▸
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {stage.cases?.length ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-semibold">公式</h2>
            <span className="text-xs text-muted-foreground">
              点击右侧按钮复制
            </span>
          </div>

          {stage.note ? (
            <p className="text-sm text-muted-foreground">{stage.note}</p>
          ) : null}

          <div className="grid gap-3 md:grid-cols-2">
            {stage.cases.map((item) => (
              <Card key={item.id} className="gap-2 p-4">
                <div className="flex items-start gap-3">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.id} 图示`}
                      className="h-16 w-16 shrink-0 rounded-sm bg-white p-1"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold">
                        {item.id}
                        {item.name ? (
                          <span className="ml-1.5 font-normal text-muted-foreground">
                            {item.name}
                          </span>
                        ) : null}
                      </h3>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => copy(item.alg)}
                        className="h-7 gap-1.5 px-2 text-muted-foreground"
                      >
                        <FaRegCopy className="h-3.5 w-3.5" />
                        复制
                      </Button>
                    </div>
                    <code className="block break-words font-mono text-sm leading-relaxed tracking-wide text-emerald-300">
                      {item.alg}
                    </code>
                    {item.note ? (
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <p className="pt-2 text-xs leading-relaxed text-muted-foreground">
        公式参考{" "}
        <a
          href="https://speedcube.de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          speedcube.de
        </a>{" "}
        与{" "}
        <a
          href="https://github.com/AshleyF/briefcubing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          briefcubing
        </a>
        ；OLL / PLL 图示来自{" "}
        <a
          href="https://github.com/cfgerr/20"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          cfgerr/20
        </a>
        （MIT），F2L 图示由公式生成。
      </p>
    </div>
  );
}
