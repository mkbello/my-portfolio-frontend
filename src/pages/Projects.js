import React from "react";
function ProjectCard({ title, desc, link }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-2">{desc}</p>
      {link && <a className="text-indigo-600 text-sm mt-3 inline-block" href={link}>View</a>}
    </div>
  );
}
export default function Projects() {
  const projects = [
    { title: "MKZone", desc: "A full-stack blog platform with CRUD features, user authentication, RBAC admin tools, and PostgreSQL-powered data management.", link: "https://mkzone.onrender.com" },
    { title: "Clinical Website (Frontend Only)", desc: "Designed and developed a responsive clinical website using HTML, CSS, and Bootstrap, featuring service listings, an about section, and interactive contact forms.", link: "https://mkbello.github.io/Clinical-Website-Design/" },
    { title: "React Calculator App", desc: "Built a responsive React Calculator App with Math.js, featuring component-based architecture, efficient state management, and deployment on GitHub Pages.", link: "https://mkbello.github.io/calculator-app/" },
    { title: "Tech Gadgets Website (Frontend Only)", desc: "Developed a responsive frontend website with Tailwind CSS and JavaScript, featuring modern layouts and interactive UI for showcasing tech gadgets.", link: "https://mkbello.github.io/Tech-Gadgets-Website-Design/" }
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (<ProjectCard key={i} {...p} />))}
      </div>
    </section>
  );
}
