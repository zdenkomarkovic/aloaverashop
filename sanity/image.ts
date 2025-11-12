import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { config } from './config';

const builder = createImageUrlBuilder(config);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
