import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import React from 'react'
import BlogList from '../../../components/BlogList';
import PreviewBlogList from '../../../components/PreviewBlogList';
import PreviewSuspense from '../../../components/PreviewSuspense';
import { client } from '../../../lib/sanity.client';

type Props = {}

const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function Blog({}: Props) {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}
