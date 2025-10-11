

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        <div className="card">
          <h3>Clinical Website (Frontend Only)</h3>
          <p>Designed and developed a responsive clinical website using HTML, CSS, and Bootstrap, featuring
            service listings, an about section, and interactive contact forms.</p>
          <div className="project-links">
            <a href="https://mkbello.github.io/Clinical-Website-Design/" target="_blank" rel="noopener noreferrer">
              Live Website
            </a>
          </div>
        </div>
        <div className="card">
          <h3>MKZone – Personal Blog Platform</h3>
          <p>Responsive platform built with Node.js, Express & PostgreSQL.
            Features CRUD posts, authentication, admin dashboard, and email notifications.
            Deployed on Render.</p>
          <div className="project-links">
            <a href="https://mkzone.onrender.com" target="_blank" rel="noopener noreferrer">
              Live Website
            </a>
          </div>
        </div>
        <div className="card">
          <h3>React Calculator App</h3>
          <p>Built a responsive React Calculator App using React and Math.js, implemented component-based
            architecture and state management for efficient updates, and deployed the project on GitHub Pages
            for public access.</p>
          <div className="project-links">
            <a href="https://mkbello.github.io/calculator-app/" target="_blank" rel="noopener noreferrer">
              Live Website
            </a>
          </div>
        </div>
        <div className="card">
          <h3>Tech Gadgets Website (Frontend Only)</h3>
          <p>A responsive frontend website built with HTML, Tailwind CSS, and JavaScript, featuring clean layouts, modern styling, and interactive UI elements for showcasing gadgets.
          </p>
          <div className="project-links">
            <a href=" https://mkbello.github.io/Tech-Gadgets-Website-Design/" target="_blank" rel="noopener noreferrer">
              Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
