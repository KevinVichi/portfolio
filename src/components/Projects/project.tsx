import "./project.css";

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      category: "Ecommerce para el Ituti",
      image: "/eje.jpeg",
      github: "https://github.com/username/repo1",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Proyecto 2",
      category: "Web Development",
      image: "/eje.jpeg",
      github: "https://github.com/username/repo1",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Proyecto 3",
      category: "Web Development",
      image: "/eje.jpeg",
      github: "https://github.com/username/repo1",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Proyecto 4",
      category: "Web Development",
      image: "/eje.jpeg",
      github: "https://github.com/username/repo1",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    // ...más proyectos
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img
              className="project-img"
              src={project.image}
              alt={project.title}
            />
            <div className="textBox">
              <p className="text head">{project.title}</p>
              <p className="category">{project.category}</p>{" "}
              {/* Añadir clase category */}
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
