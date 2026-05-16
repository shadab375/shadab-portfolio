import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectBlog from "@/components/ProjectBlog";
import { siteContent } from "@/data/siteContent";

type ProjectPageProps = {
  params: {
    uid: string;
  };
};

export function generateStaticParams() {
  return siteContent.projects.map((project) => ({
    uid: project.uid,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = siteContent.projects.find((item) => item.uid === params.uid);

  if (!project) {
    return {
      title: "Project not found | Shadab",
    };
  }

  const metadata: Metadata = {
    title: `${project.title} | Shadab`,
    description: `A project writeup for ${project.title}.`,
  };

  if (project.image) {
    metadata.openGraph = {
      title: project.title,
      images: [project.image],
    };
  }

  return metadata;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = siteContent.projects.find((item) => item.uid === params.uid);

  if (!project) {
    notFound();
  }

  return <ProjectBlog project={project} />;
}
