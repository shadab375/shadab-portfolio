import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Shadab | Full-stack Product Engineer",
  description:
    "Portfolio of Shadab, focused on Phodu Club, EdTech platforms, test engines, AI workflows, and production-grade web apps.",
};

export default function Page() {
  return <HomePage />;
}
