import {createClient, groq} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2022-11-16" // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== 'undefined', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
}

export const sanityClient = createClient(config)

export const data = sanityClient.fetch(groq`*[]`)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)