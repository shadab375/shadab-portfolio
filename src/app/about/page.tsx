import type { Metadata } from "next";
import { AboutPageContent } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "About | Shadab",
  description: "About Shadab Kalim, experience, education, and technology stack.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
