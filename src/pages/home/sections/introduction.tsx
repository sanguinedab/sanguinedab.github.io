import { FaRegEnvelope, FaLocationDot, FaFileLines } from "react-icons/fa6";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { profile } from "@/data/profile";

export default function IntroductionSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <ProfileCard />
      <Biography />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-y-4 shrink-0">
      <img
        src={profile.profileImage}
        alt="头像"
        className="w-60 h-auto rounded-lg object-cover"
        loading="lazy"
      />
      <div className="flex flex-col items-center gap-y-2">
        {profile.name && (
          <p className="text-2xl font-semibold text-foreground">
            {profile.name}
          </p>
        )}
        {profile.headline && (
          <p className="text-base font-medium text-muted-foreground">
            {profile.headline}
          </p>
        )}
        {profile.email && <EmailCopy email={profile.email} />}
        {profile.location && (
          <p className="flex flex-row items-center gap-2 text-base font-medium text-muted-foreground">
            <FaLocationDot className="w-4 h-4" />
            {profile.location}
          </p>
        )}
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-row flex-wrap justify-center gap-y-2 gap-x-4 py-2 text-foreground max-w-64">
            {profile.links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <item.icon
                      className="w-8 h-8 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-50"
                      aria-label={item.name}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </a>
            ))}
          </div>
        </TooltipProvider>

        {import.meta.env.DEV ? (
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <Link to="/resume">
              <FaFileLines className="h-3.5 w-3.5" />
              简历 · 导出 PDF
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function Biography() {
  return (
    <div className="min-w-64 max-w-prose w-full px-4 sm:px-0">
      <div className="text-2xl font-semibold mb-2">关于我</div>
      {profile.biography ? (
        <div
          className="prose dark:prose-invert text-justify text-base/6"
          dangerouslySetInnerHTML={{ __html: profile.biography }}
          aria-label="个人简介"
        />
      ) : (
        <p className="text-gray-500 italic">暂无简介。</p>
      )}
    </div>
  );
}

function EmailCopy({ email }: { email: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast("📋 邮箱已复制", {
      // description: `${email} has been copied to your clipboard.`,
      action: {
        label: "📩 发送邮件",
        onClick: () => {
          window.location.href = `mailto:${email}`;
        },
      },
    });
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className="flex flex-row items-center gap-2 text-base font-medium text-foreground cursor-pointer opacity-80 hover:opacity-100 focus:outline-none"
          >
            <FaRegEnvelope className="w-4 h-4" />
            {email}
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>点击复制</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
