import type { MetadataRoute } from "next";
import { TEACHERS } from "@/lib/teachers";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/profes", changeFrequency: "weekly", priority: 0.9 },
  { path: "/nosotros", changeFrequency: "monthly", priority: 0.7 },
  { path: "/trabaja-con-nosotros", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...TEACHERS.map((teacher) => ({
      url: absoluteUrl(`/profes/${teacher.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteUrl(teacher.photo)],
    })),
  ];
}
