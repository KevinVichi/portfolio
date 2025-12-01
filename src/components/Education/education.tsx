import { useInView } from "../../Hook/hook";
import "./education.css";

const educations = [
  {
    name: "Google Activate",
    image: "/google.jpeg",
    description: "Competencias digitales para profesionales",
    link: "https://skillshop.exceedlms.com/student/award/WYCNNjn3HaJain3uSs8wE81f",
  },
  {
    name: "Certificado UTA",
    image: "/uta.webp",
    description: "Emerging Research Frontiers in Computer, Science, Electronics and Industrial Engineering",
    link: "https://utaep.com.ec/bdpnew/UPLOAD/CERTIFICADOS/C416/APROBACION/C416_APROBA_0550128375_VICHICELACASA.PDF",
  },
    {
    name: "Certificado UTA",
    image: "/uta.webp",
    description: "VI Conference on Computer Science, Electronics and Industrial Engineering",
    link: "https://utaep.com.ec/bdpnew/UPLOAD/CERTIFICADOS/C416/PARTICIPACION/20241105_C416_PART_0550128375_VICHICELACASA.PDF",
  },
    {
    name: "Google Activate",
    image: "/google.jpeg",
    description: "Curso de Desarrollo de Apps Móviles",
    link: "https://skillshop.exceedlms.com/student/award/4gsPiRQs1dxTwVcWiW7qKjXA",
  },
    {
    name: "Curso SUDEN",
    image: "/suden.webp",
    description: "ESPECIALIDAD TÉCNICA",
    pdf: "/tecnica.pdf",
  },
    {
    name: "Curso SUDEN",
    image: "/suden.webp",
    description: "EXPERTO (A) EN ENSAMBLAJE DE COMPUTADORAS, CELULARES E IMPRESORAS",
    pdf: "/ensamblaje.pdf",
  },
    {
    name: "Curso SUDEN",
    image: "/suden.webp",
    description: "EXPERTO (A) EN REPARACIÓN DE COMPUTADORAS, CELULARES E IMPRESORAS",
    pdf: "/reparacion.pdf",
  },
    {
    name: "Curso SUDEN",
    image: "/suden.webp",
    description: "EXPERTO (A) TÉCNICO INTERNACIONAL",
    pdf: "/internacional.pdf",
  },
    {
    name: "Fundacion Carlos Slim",
    image: "/suden.webp",
    description: "Fundamentos de Machine Learning",
    link: "https://capacitateparaelempleo.org/verifica/9094cb1a-0003-4fdf-b0a0-932f591c6a4c/e85dc447-ab36-4aa2-8bee-f8b82eed9c12",
  },
    {
    name: "Fundacion Carlos Slim",
    image: "/CS.webp",
    description: "Fundamentos de Machine Learning",
    link: "https://capacitateparaelempleo.org/verifica/9094cb1a-0003-4fdf-b0a0-932f591c6a4c/e85dc447-ab36-4aa2-8bee-f8b82eed9c12",
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
            <img src={edu.image} alt={edu.name} className="hobby-image" width={300} height={200} />
            <div className="hobby-textBox">
              <h3 className="hobby-name">{edu.name}</h3>
              <p className="hobby-description">{edu.description}</p>
              {(edu.pdf || edu.link) && (
                <a
                  href={edu.link ? edu.link : edu.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-link"
                  title="Ver Certificado"
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