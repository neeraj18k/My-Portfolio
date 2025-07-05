import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-4 bg-black text-white text-center relative overflow-hidden"
    >
      {/* Glowing circles in background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          My Resume
        </h2>

        <p className="text-lg text-gray-300 mb-12">
          Click below to view or download my latest resume.
        </p>

        {/* View Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          📄 View Resume
        </a>

        {/* Spacer */}
        <div className="my-6" />

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Neeraj_Kumar_Resume.pdf"
          className="inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          ⬇️ Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;
