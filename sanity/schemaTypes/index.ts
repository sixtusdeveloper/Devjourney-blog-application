import { type SchemaTypeDefinition } from 'sanity';
import { author } from '@/sanity/schemaTypes/author';
import { devpost } from '@/sanity/schemaTypes/devpost';
import { playlist } from '@/sanity/schemaTypes/playlist';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, devpost, playlist],
}
