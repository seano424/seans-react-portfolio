import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import Article from "../../components/Article";

export const getAllPosts = async (notion_id) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${notion_id}`
  ).then((res) => res.json());
};

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <div className="mt-12">
        <h1 className="text-4xl font-bold opacity-90">Posts</h1>
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
              <div className="bg-white dark:bg-gray-800 px-20 py-8 rounded shadow">
                <a className="text-2xl font-black">{post.title}</a>
                <p>{post.description}</p>
                <p className="font-mono">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(process.env.NOTION_ID);

  return {
    props: {
      posts,
    },
  };
}
