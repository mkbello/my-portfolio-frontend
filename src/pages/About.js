import React from "react";
export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="max-w-3xl mb-4">I am a passionate and detail-oriented Web Developer with experience building modern, responsive, and user-friendly websites and applications. My expertise spans HTML, CSS, JavaScript, React, and Bootstrap on the frontend, with backend skills in Node.js/Express and database integration to create full-stack solutions.

        I enjoy transforming ideas into functional digital experiences by combining clean code with intuitive design. Over time, I’ve developed projects such as portfolio website, blog, frontend only websites, react calculator, and contact form systems that integrate email handling, animations, and interactive features.

        I am constantly learning new tools and frameworks to stay up to date with industry best practices. My goal is to build applications that are not only visually appealing but also scalable, efficient, and impactful for users.</p>
      <a
        className="text-indigo-600 text-sm"
        href="/MUKTAR BELLO.pdf"
        download
      >
        Download Resume
      </a>
    </section>

  );
}
