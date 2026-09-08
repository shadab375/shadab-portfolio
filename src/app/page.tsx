import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Shadab | Full-stack Product Engineer",
  description:
    "Portfolio of Shadab, focused on the Phodu Club ecosystem (learn.phodu.club, phodu.club, BetterBooks), EdTech platforms, test engines, marketplaces, AI workflows, and production-grade web apps.",
};

export default function Page() {
  return <HomePage />;
}
