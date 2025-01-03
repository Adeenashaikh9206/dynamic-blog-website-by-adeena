// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { motion } from "framer-motion"; // Importing motion for animations

// const articles = [
//   {
//     id: "1",
//     title: "HTML: Transforming the Future of Web Development",
//     image: "/b1.webp",
//     summary:
//       "HTML has become the standard for web development, enabling developers to create visually appealing and interactive websites.",
//   },
//   {
//     id: "2",
//     title: "The Future of Technology and Its Impact on Daily Life",
//     image: "/b2.webp",
//     summary: "AI is transforming the way we approach creative endeavors.",
//   },
//   {
//     id: "3",
//     title: "CSS Nesting Improvements: Elevating Your Stylesheets for Better Maintainability",
//     image: "/b3.webp",
//     summary:
//       "CSS nesting Improvement.",
//   },
//   {
//     id: "4",
//     title: "The Game-Changer in Programming: Embracing Modern Languages and Tools",
//     image: "/b4.jpeg",
//     summary: "The world of web development is evolving rapidly.",
//   },
//   {
//     id: "5",
//     title: "Empowering Education with Digital Tools",
//     image: "/b5.jpeg",
//     summary:
//       "The rise of e-learning platforms has made education accessible to millions worldwide.",
//   },
//   {
//     id: "6",
//     title: "The Role of Blockchain in Modern Businesses",
//     image: "/b6.jpeg",
//     summary: "Blockchain is reshaping how businesses operate globally.",
//   },
// ];

// const ArticlesPage = () => {
//   const [displayLimit, setDisplayLimit] = useState(6);

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-20"
//       initial={{ opacity: 0 }} // Set initial opacity to 0
//       animate={{ opacity: 1 }} // Animate opacity to 1
//       transition={{ duration: 1 }} // Duration of the fade-in effect
//     >
//       <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 my-8">
//         Latest Articles
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10 md:p-16">
//         {articles.slice(0, displayLimit).map((article) => (
//           <motion.div
//             key={article.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }} // Delay each article fade-in
//           >
//             <Link href={`/articles/${article.id}`}>
//               <div className="relative h-48">
//                 <Image
//                   src={article.image}
//                   alt={article.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30"></div>
//               </div>
//             </Link>
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-700 mb-2 hover:text-purple-600">
//                 {article.title}
//               </h2>
//               <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
//               <Link
//                 href={`/blog/${article.id}`}
//                 className="text-purple-500 font-medium hover:underline"
//               >
//                 Read More
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       {displayLimit < articles.length && (
//         <div className="text-center mb-10">
//           {/* You can add a button here to load more articles if needed */}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default ArticlesPage;
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Importing motion for animations

const articles = [
  {
    id: "1",
    title: "HTML: Transforming the Future of Web Development",
    image: "/b1.webp",
    summary:
      "HTML has become the standard for web development, enabling developers to create visually appealing and interactive websites.",
  },
  {
    id: "2",
    title: "The Future of Technology and Its Impact on Daily Life",
    image: "/b2.webp",
    summary: "AI is transforming the way we approach creative endeavors.",
  },
  {
    id: "3",
    title: "CSS Nesting Improvements: Elevating Your Stylesheets for Better Maintainability",
    image: "/b3.webp",
    summary:
      "CSS nesting Improvement.",
  },
  {
    id: "4",
    title: "The Game-Changer in Programming: Embracing Modern Languages and Tools",
    image: "/b4.jpeg",
    summary: "The world of web development is evolving rapidly.",
  },
  {
    id: "5",
    title: "Empowering Education with Digital Tools",
    image: "/b5.jpeg",
    summary:
      "The rise of e-learning platforms has made education accessible to millions worldwide.",
  },
  {
    id: "6",
    title: "The Role of Blockchain in Modern Businesses",
    image: "/b6.jpeg",
    summary: "Blockchain is reshaping how businesses operate globally.",
  },
];

const ArticlesPage = () => {
  const [displayLimit, setDisplayLimit] = useState(6);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-20"
      initial={{ opacity: 0 }} // Set initial opacity to 0
      animate={{ opacity: 1 }} // Animate opacity to 1
      transition={{ duration: 1 }} // Duration of the fade-in effect
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 my-8">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10 md:p-16">
        {articles.slice(0, displayLimit).map((article) => (
          <motion.div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Fade in when the article comes into view
            transition={{ duration: 0.5, delay: 0.2 }} // Delay each article fade-in
            viewport={{ once: true }} // This ensures the animation happens only once when the article enters the view
          >
            <Link href={`/articles/${article.id}`}>
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30"></div>
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 hover:text-purple-600">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
              <Link
                href={`/blog/${article.id}`}
                className="text-purple-500 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      {displayLimit < articles.length && (
        <div className="text-center mb-10">
          {/* You can add a button here to load more articles if needed */}
        </div>
      )}
    </motion.div>
  );
};

export default ArticlesPage;
