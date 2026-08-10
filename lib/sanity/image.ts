import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { sanityClient } from './client'

export const urlFor = (source: Image) =>
  createImageUrlBuilder(sanityClient).image(source)
