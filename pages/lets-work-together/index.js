import React from 'react'
import Layout from '../../components/Layout'
import { NotionRenderer } from 'react-notion'

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NEXT_PUBLIC_VERCEL_ENV_NOTION_ID}`
  ).then((res) => res.json())
}

export default function Posts({ mypost, blocks }) {
  return (
    <Layout>
      <div className="w-7/12 px-28 mt-4 dark:bg-white  rounded-xl p-20">
        <NotionRenderer blockMap={blocks} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(process.env.NEXT_PUBLIC_VERCEL_ENV_NOTION_ID)
  const mypost = posts.find((post) => post.title == "Let's Work Together")
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${mypost.id}`
  ).then((res) => res.json())

  return {
    props: {
      mypost,
      blocks,
    },
  }
}
