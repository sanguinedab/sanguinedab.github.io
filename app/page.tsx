import { AiChat } from "@/components/terminal/AiChat";
import { profile } from "@/lib/md";

export default function Home() {
  return <AiChat name={profile.name} />;
}
