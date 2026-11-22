import { HashRouter as Router, Routes, Route } from "react-router";

import Layout from "@/layout";
import { loadLazy } from "@/lib/loadComponent";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/hooks/scroll-to-top";
import { useGlobalMeta } from "./hooks/use-global-meta";

const HomePage = loadLazy(() => import("@/pages/home"));
const ProjectsPage = loadLazy(() => import("@/pages/projects"));
const CubePage = loadLazy(() => import("@/pages/cube"));
const CubeStagePage = loadLazy(() => import("@/pages/cube/detail"));
const ProjectDetailPage = loadLazy(() => import("@/pages/projects/detail"));
const PublicationsPage = loadLazy(() => import("@/pages/publications"));
const ArticlesPage = loadLazy(() => import("@/pages/articles"));
const ArticlePage = loadLazy(() => import("@/pages/articles/page"));
const NotFoundPage = loadLazy(() => import("@/pages/notfound"));
// 简历只在本地开发时可用，线上构建不包含该页面
const ResumePage = import.meta.env.DEV
  ? loadLazy(() => import("@/pages/resume"))
  : null;

export default function App() {
  useGlobalMeta();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <Routes>
          {import.meta.env.DEV && ResumePage ? (
            <Route path="/resume" element={<ResumePage />} />
          ) : null}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="cube" element={<CubePage />} />
            <Route path="cube/:slug" element={<CubeStagePage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
