import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Giscus from "@giscus/react";
import { FaArrowLeft } from "react-icons/fa6";

import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { Button } from "@/components/ui/button";
import { parseFrontmatter } from "@/utils/parseFrontmatter";
import type { FrontMatter } from "@/utils/parseFrontmatter";
import { giscus } from "@/data/giscus";

import { resolveRelativePaths, publicBase } from "./resolveRelativePaths";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [metadata, setMetadata] = useState<FrontMatter>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  usePageTitle(metadata.title ?? slug ?? "");

  useEffect(() => {
    if (!slug) return;

    const loadArticle = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${publicBase}/${slug}/${slug}.md`);
        const rawContent = await res.text();

        if (!res.ok) throw new Error("FETCH_ERROR");
        // detect GitHub Pages fallback to index.html
        if (
          rawContent.startsWith("<!DOCTYPE html>") ||
          rawContent.includes('<div id="')
        )
          throw new Error("NOT_FOUND");

        try {
          const { attributes, body } = parseFrontmatter(rawContent);
          const content = resolveRelativePaths(body, slug);
          setMetadata(attributes);
          setContent(content);
        } catch (e) {
          console.error("Frontmatter parse error:", e);
          throw new Error("PARSE_ERROR");
        }
      } catch (err) {
        console.error(err);
        setContent("");

        if (err instanceof Error) {
          if (err.message === "NOT_FOUND") {
            setError(`The article "${slug}" does not exist.`);
            setMetadata({ title: "文章不存在" });
          } else if (err.message === "PARSE_ERROR") {
            setError(`The article "${slug}" has invalid formatting.`);
            setMetadata({ title: "格式错误" });
          } else {
            setError("文章加载失败，请稍后重试。");
            setMetadata({ title: "出错了" });
          }
        } else {
          setError("发生未知错误。");
          setMetadata({ title: "出错了" });
        }
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (error) {
    return (
      <div className="flex justify-center">
        <div className="text-center max-w-6xl w-full bg-muted rounded-md space-y-4 p-6 sm:p-12 border shadow-sm">
          <div className="text-4xl font-semibold">
            {metadata.title || "出错了"}
          </div>
          <p>{error}</p>
          <Button asChild variant="outline" className="mt-2 gap-1">
            <Link to="/articles">
              <FaArrowLeft className="w-4 h-4" /> 返回文章列表
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="prose dark:prose-invert max-w-6xl w-full bg-muted rounded-md overflow-hidden p-6 sm:p-12 border shadow-sm">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          skipHtml={false}
        >
          {content}
        </ReactMarkdown>

        {!loading && <Separator className="my-6 sm:my-12" />}
        {!loading && <ArticleComments />}
      </div>

      <div className="relative w-full max-w-6xl mt-4">
        <div className="absolute top-0 right-0">
          <Button
            asChild
            variant="ghost"
            size="default"
            className="gap-1 text-muted-foreground"
          >
            <Link to="/articles">
              <FaArrowLeft className="w-4 h-4" /> 返回文章列表
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ArticleComments() {
  const location = useLocation();
  const { theme } = useTheme();

  // giscus 未配置（repoId 为空）时不渲染评论区
  if (!giscus.repoId) return null;

  const giscusTheme: "light" | "dark_dimmed" = (() => {
    if (theme === "dark") return "dark_dimmed";
    if (theme === "light") return "light";
    // fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark_dimmed"
      : "light";
  })();

  return (
    <Giscus
      repo={giscus.repo}
      repoId={giscus.repoId}
      category="General"
      categoryId={giscus.categoryId}
      mapping="specific"
      term={location.pathname}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={giscusTheme}
      lang="zh-CN"
      loading="lazy"
    />
  );
}
