import { Hero } from "@/components/terminal/Hero";
import { profile } from "@/lib/md";

export default function ProfilePage() {
  return <Hero profile={profile} />;
}
