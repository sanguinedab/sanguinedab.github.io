import { FaGraduationCap, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { campus } from "@/data/campus";

export default function CampusPage() {
  usePageTitle("校园经历");

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-3">
          <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
            <FaGraduationCap />
            校园经历
          </div>
          <p className="text-center text-muted-foreground">
            从微电子转到数据科学，从课程设计一路做到实验室的私有链。
          </p>
        </div>

        <div className="space-y-4">
          {campus.map((entry) => (
            <Card key={entry.period} className="gap-0 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="rounded-sm font-normal">
                  {entry.period}
                </Badge>
                <h3 className="text-lg font-semibold">{entry.title}</h3>
              </div>

              <ul className="mt-3 space-y-1.5">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                  >
                    <span
                      aria-hidden
                      className="select-none text-muted-foreground"
                    >
                      ▸
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {entry.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.links.map((link) => (
                    <Button
                      key={link.href}
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-1.5"
                    >
                      <Link to={link.href}>
                        {link.label}
                        <FaArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
