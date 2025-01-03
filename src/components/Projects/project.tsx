import "./project.css";
import { useInView } from "../../Hook/hook";

const Projects = () => {
  const { ref, isInView } = useInView();
  const projects = [
    {
      title: "🔩 Tuerca Dorada",
      category: "Tienda Online con diseño intuitivo",
      image: "/TuercaDorada.png",
      github: "https://github.com/KevinVichi/TuercaDorada",
      technologies: ["Php", "HTML", "Bootstrap"],
    },
    {
      title: "ITuti Shop",
      category: "Tienda Online para la industria Ituti",
      image: "/ITutiShop.png",
      github: "https://github.com/davidf110102/ITutiShop",
      technologies: ["Php", "HTML", "Bootstrap"],
    },
    {
      title: "Sistema QR",
      category: "Sistema de quejas y reclamos",
      image: "/SistemaQR.png",
      github: "https://github.com/KevinVichi/SistemaQuejaReclamo",
      technologies: ["Angular", "Node", "Firebase"],
    },
    {
      title: "KDinner",
      category: "App de recetas de cocina",
      image: "/appReceta.png",
      github: "https://github.com/KevinVichi/AppRecetas",
      technologies: ["Angular", "Node", "MySQL"],
    },
    {
      title: "Portafolio",
      category: "Portafolio profesional",
      image: "/portafolio.png",
      github: "https://github.com/KevinVichi/portfolio",
      technologies: ["React", "Node", "TypeScript"],
    },
    {
      title: "BusTrack",
      category: "Pagina web para compra venta de boletos",
      image: "/BusTrack.png",
      github:
        "https://github.com/ArielTonato/app-buses-front-web/tree/feature/CompraBoletos",
      technologies: ["Angular", "PrimeNG", "Vite"],
    },
    {
      title: "VichiTec",
      category: "Aplicacion movil para la compra y venta de productos",
      image: "/VichiTec.png",
      github: "https://github.com/KevinVichi/VichiTec",
      technologies: ["Angular", "Firebase", "TypeScript "],
    },
    // ...más proyectos
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className={`projects-section ${isInView ? "show" : ""}`}
    >
      <div className="projects-container">
        <h2 className="projects-title">Mis Proyectos</h2>
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
              <br></br>
              <br></br>
              <br></br>
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
