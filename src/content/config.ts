import { defineCollection, z } from "astro:content";

export const collections = {
  experience: defineCollection({
    type: "content",
    schema: z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      highlights: z.array(z.string()).optional(),
    }),
  }),
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      slug: z.string().optional(),
    }),
  }),
  leadership: defineCollection({
    type: "content",
    schema: z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      highlights: z.array(z.string()).optional(),
    }),
  }),
};
