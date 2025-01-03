"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";


const posts = [
  {
    id: "1",
    title: "HTML: Transforming the Future of Web Development",
    image: "/b1.webp",
    content: [
      "HTML has been at the core of web development for decades, evolving from a basic tool for structuring content to a robust language that supports multimedia, interactive elements, and even offline functionality.",
    "The future of HTML includes advanced multimedia capabilities, such as VR and AR support, dynamic content management using tags like `<template>`, and a focus on accessibility to make the web more inclusive.",
    "As HTML evolves, developers must address critical challenges like maintaining simplicity for new learners, ensuring sustainable development, and complying with privacy and security standards.",
    ],
  },
  {
    id: "2",
    title: "The Future of Technology and Its Impact on Daily Life",
    image: "/b2.webp",
    content: [
      "Technology is revolutionizing daily life, from AI-driven automation to advancements in renewable energy. As AI enhances industries and renewable energy offers sustainable solutions, these innovations improve efficiency and environmental impact. However, we must ensure responsible development to address concerns like privacy, security, and job displacement. As technology evolves, we must prioritize privacy, security, and sustainability to ensure responsible growth. While advancements promise a better future, careful consideration is essential to avoid potential challenges like job displacement and data misuse. ",
    ],
  },
  {
    id: "3",
    title: "CSS Nesting Improvements:",
    image: "/b3.webp",
    content: [
      "CSS has evolved significantly over the years, with one of the most impactful advancements being the introduction of CSS nesting.",
      "This feature enables developers to structure their stylesheets in a more intuitive and organized manner by nesting styles within one another.",
      " In this blog, we’ll discuss how CSS nesting can improve the way you write and manage styles, and explore best practices to make your code cleaner, more efficient, and scalable",
    ],
  },
  {
    "id": "4",
    "title": "The Game-Changer in Programming: Embracing Modern Languages and Tools",
    "image": "/b4.jpeg",
    "content": [
      "In the ever-evolving world of programming, the introduction of new languages and tools has continuously reshaped how developers approach their craft.",
      "Modern languages like TypeScript, Python, and Rust are changing the landscape by improving developer productivity, reducing errors, and ensuring more scalable solutions.",
      "Tools and frameworks built around these languages have revolutionized the development process, making tasks simpler, more efficient, and allowing developers to create more powerful applications.",
      "By embracing these innovations, developers can not only enhance their work but also stay ahead of the curve in an industry that thrives on progress and innovation.",
      "The key to becoming a successful programmer in today's world is the ability to adapt and leverage these modern tools, turning them into a competitive advantage."
    ]
  },
  
  {
    id: "5",
    title: "Empowering Education with Digital Tools",
    image: "/b5.jpeg",
    content: [
      "The rise of e-learning platforms has made education accessible to millions worldwide.",
      "Digital tools empower educators to deliver personalized and engaging learning experiences.",
      "However, bridging the digital divide remains a critical challenge for ensuring equal opportunities.",
    ],
  },
  {
    id: "6",
    title: "The Role of Blockchain in Modern Businesses",
    image: "/b6.jpeg",
    content: [
      "Blockchain technology is revolutionizing industries with its decentralized and transparent nature.",
      "From secure financial transactions to smart contracts, blockchain is reshaping how businesses operate globally.",
      "Its potential applications extend beyond cryptocurrency, including supply chain management and digital identity verification.",
    ],
  },
];

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };

  if (!post) {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-16">
    
      <div className="container mx-auto text-center p-6 sm:p-12 pt-16 md:pt-24">
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 sm:h-72 lg:h-96 mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black my-8">
          {post.title}
        </h1>
        <div className="text-lg sm:text-xl text-gray-700 leading-relaxed mx-auto max-w-4xl">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-10 max-w-sm md:max-w-2xl lg:max-w-4xl bg-gradient-to-t from-purple-200 via-indigo-100 to-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:ring focus:ring-purple-300 overflow-wrap break-words"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 ml-2 rounded-r hover:bg-purple-600"
            >
              Post
            </button>
          </div>
        </form>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to share your thoughts!
            </p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md p-4 text-gray-800"
              >
                {comment}
              </div>
            ))
          )}
        </div>
      </div>
    
    </div>
  );
};

export default PostPage;
