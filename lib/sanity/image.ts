import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { sanityClient } from './client'

const { projectId, dataset } = sanityClient.config()
const builder = createImageUrlBuilder({ projectId: projectId!, dataset: dataset! })

export const urlFor = (source: Image) => builder.image(source)
