import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    timeframe: z.string().optional(),
    summary: z.string().optional(),
    impact: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    stack: z.array(z.string()).optional(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    reportPdf: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    start: z.string(),
    end: z.string().optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, experience };
