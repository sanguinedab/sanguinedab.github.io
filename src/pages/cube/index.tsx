import { Link } from "react-router";
import { FaCube } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { cubeStages } from "@/data/cube";

export default function CubePage() {
  usePageTitle("魔方");

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-10">
        <div className="space-y-3">
          <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
            <FaCube />
            魔方
          </div>
          <p className="text-center text-lg text-muted-foreground">
            CFOP · 目前 sub-20，点击卡片查看每个阶段的公式
          </p>
        </div>

        <div className="grid w-full gap-4 px-2 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cubeStages.map((stage) => (
            <Link
              key={stage.slug}
              to={`/cube/${stage.slug}`}
              className="group focus-visible:outline-none"
            >
              <Card className="rounded-md overflow-hidden gap-0 py-0 w-full transition-colors group-hover:border-primary/50 group-focus-visible:border-primary/50">
                <img
                  src={stage.poster}
                  alt={`${stage.en} 阶段`}
                  className="aspect-2/3 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-1.5 p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{stage.name}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {stage.en}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stage.summary}
                  </p>
                  <p className="text-xs text-emerald-400/80">{stage.meta}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
