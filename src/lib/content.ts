import { getCollection, type CollectionEntry } from 'astro:content';

const collectionNames = ['trabajos', 'productos', 'notas'] as const;
export type CollectionName = (typeof collectionNames)[number];

export async function safeCollection<K extends CollectionName>(name: K): Promise<CollectionEntry<K>[]> {
  try {
    return (await getCollection(name)) as CollectionEntry<K>[];
  } catch {
    return [];
  }
}
