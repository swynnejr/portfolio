'use client'

import {NextStudio} from 'next-sanity/studio'

import config from '../../../../sanity.config'

export const revalidate = 3600; // revalidate this page every hour

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />
}