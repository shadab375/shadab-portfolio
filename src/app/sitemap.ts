import { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteRoot = "https://shadab.dev";

  const staticRoutes = [
    {
      url: siteRoot,
      lastModified: new Date(),
    },
    {
      url: `${siteRoot}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteRoot}/project`,
      lastModified: new Date(),
    },
  ];

  const projectRoutes = siteContent.projects.map((project) => ({
    url: `${siteRoot}/project/${project.uid}`,
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...projectRoutes];
}
