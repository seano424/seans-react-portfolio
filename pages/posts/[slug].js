import React from 'react'
import { NotionRenderer } from 'react-notion'
import Layout from '../../components/Layout'
import { getAllPosts } from './'

export default function Post({ blocks }) {
    return (
        <Layout>
            <section className="w-7/12 mt-10 dark:bg-gray-200 rounded p-5">
                <NotionRenderer blockMap={blocks} />
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const posts = await getAllPosts()
    const post = posts.find((t) => t.slug === slug)
    // const id = post.id
    // https://notion-api.splitbee.io/v1/page/5f37eb22-d15d-4551-b87e-9251ceb3cb71
    const blocks = await fetch(
        `https://notion-api.splitbee.io/v1/page/${post.id}`
    ).then((res) => res.json())

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
            slug,
            blocks,
        },
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts(process.env.NEXT_PUBLIC_NOTION_ID)
    return {
        paths: posts.map((row) => `/posts/${row.slug}`),
        fallback: false,
    }
}
