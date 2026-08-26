import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    type: z.literal("project").default("project"),
    title: z.string(),
    slug: z.string().optional(),
    year: z.string(),
    role: z.string(),
    summary: z.string(),
    hook: z.string().optional(),
    depth: z.enum(["deep", "light"]).default("light"),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverPosition: z.string().default("center"),
    coverFit: z.enum(["cover", "contain"]).default("cover"),
    video: z.string().optional(),
    award: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    order: z.number().default(100),
    hidden: z.boolean().default(false),
  }),
});

export const collections = { projects };
