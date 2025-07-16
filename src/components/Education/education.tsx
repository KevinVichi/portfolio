import { useInView } from "../../Hook/hook";
import "./education.css";

const educations = [
  {
    name: "Título Bachiller",
    image: "/bachiller.jpg",
    description: "INSTALACIONES, EQUIPOS Y MÁQUINAS ELÉCTRICAS",
    pdf: "/bachiller.pdf",
  },
  {
    name: "Certificado de Inglés",
    image: "/google.jpeg",
    description: "Certificado TOEFL - Nivel Avanzado",
    pdf: "/ingles.pdf",
  },
  {
    name: "Curso de Programación",
    image: "/uta.webp",
    description: "Curso de React y TypeScript",
    pdf: "/programacion.pdf",
  },
];

const Education = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="education"
      className={`hobbies-section ${isInView ? "show" : ""}`}
    >
      <h2 className="hobbies-title">Mi Educación</h2>
      <div className="hobbies-container">
        {educations.map((edu, index) => (
          <div key={index} className="hobby-card">
            <img src={edu.image} alt={edu.name} className="hobby-image" />
            <div className="hobby-textBox">
              <h3 className="hobby-name">{edu.name}</h3>
              <p className="hobby-description">{edu.description}</p>
              {edu.pdf && (
                <a
                  href={edu.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-link"
                  title="Ver PDF"
                  style={{ fontSize: "2rem", marginTop: "1rem", color: "#fff" }}
                >
                  📄
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;