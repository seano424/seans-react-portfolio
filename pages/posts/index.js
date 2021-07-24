import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NEXT_PUBLIC_VERCEL_ENV_NOTION_ID}`
  ).then((res) => res.json())
}

export default function Posts({ posts }) {
  return (
    <Layout>
      <div className="mt-12">
        <h1 className="text-5xl ml-2 font-bold opacity-90">Posts</h1>
        {posts.map((post) => (
          <Link
            key={post.id}
            href="/posts/[slug]"
            as={`/posts/${post.slug}`}
            passHref
          >
            <div
              passhref="true"
              className="flex cursor-pointer my-5 flex-col gap-y-4 px-2 py-2 rounded"
            >
              <div className="bg-white dark:bg-gray-800 px-20 py-8 rounded-lg shadow">
                <a className="text-2xl font-black">{post.title}</a>
                <p>{post.description}</p>
                <p className="font-mono">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allposts = await getAllPosts('6adb3253346d49cbbd70077cb772e4b9')
  const posts = allposts.filter((post) => post.title != "Let's Work Together")

  return {
    props: {
      posts,
      notion: '6adb3253346d49cbbd70077cb772e4b9',
    },
  }
}
