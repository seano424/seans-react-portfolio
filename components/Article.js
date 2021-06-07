import React from "react";

export default function Article({ post }) {
  const { title, description, date } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}
