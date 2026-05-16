import type { Metadata } from "next";
import { ProjectPageContent } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Projects | Shadab",
  description: "Projects by Shadab Kalim from the original portfolio content.",
};

export default function ProjectPage() {
  return <ProjectPageContent />;
}
