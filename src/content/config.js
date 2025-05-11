// Define el esquema para las colecciones de contenido en el proyecto
import { defineCollection, z } from 'astro:content';

// Definición del esquema para artículos del blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default('Ana López'),
    tags: z.array(z.string()).default(['nutrición']),
    featured: z.boolean().default(false),
  }),
});

// Exportar las colecciones para que Astro las reconozca
export const collections = {
  'blog': blogCollection,
};
