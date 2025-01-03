"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div  >
      {/* Main About Section with Animation */}
      <motion.div
        className="  bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-64 h-96 rounded-full overflow-hidden">
                <Image
                  src="/mypic1.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <motion.div
              className=" w-full md:w-2/3 flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                I am a passionate web developer with 1 year of experience in creating beautiful and functional websites. My expertise lies in HTML, CSS, JavaScript, TypeScript, and Next.js, which I use to bring creative ideas to life.
                Over the past year, I have built several projects, including a calculator, a number guessing game, and a professional CV, showcasing my ability to solve problems and design user-friendly interfaces. Currently, I am working on a blog website that reflects my skills in modern web development.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                I enjoy learning new technologies and continuously improving my skills to stay up-to-date with the latest trends in web development. My goal is to build websites that are not only visually appealing but also efficient, responsive, and easy to use.
                If you're looking for a dedicated developer who loves coding and creativity, feel free to connect with me!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Section with Scroll-triggered Animation for Blog Information */}
      <motion.section
        className=" bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 py-16 bg-gray-100 dark:bg-gray-800 dark:text-white"
        whileInView={{ opacity: 1, x: 0 }} // Trigger animation when section is in view
        initial={{ opacity: 0, x: 100 }} // Start off-screen and invisible
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">"About Our Blog"</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here's how Harry navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/3">
                <img
                  src="/ab.webp"
                  alt="Harry as a beginner"
                  className="rounded-lg shadow-lg w-96 max-h-64"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Our Blog</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Welcome to [Your Blog Name], where we share the excitement and challenges of web development! Whether you're just starting or a seasoned developer, this blog is here to guide you through the world of HTML, CSS, JavaScript, TypeScript, and Next.js.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row-reverse items-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="md:w-1/3">
                <img
                  src="/am.webp"
                  alt="Harry learning new skills"
                  className="w-96 max-h-64 rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Our Mission</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Our mission is to simplify complex coding concepts and provide easy-to-understand tutorials, tips, and resources that help developers grow. We believe learning to code should be accessible, enjoyable, and rewarding for everyone—from beginners to advanced programmers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
