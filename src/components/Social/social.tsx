import "./social.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useInView } from "../../Hook/hook";

const SocialLinks = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="social"
      className={`social-section ${isInView ? "show" : ""}`}
    >
      <div className="social-container">
        <h2 className="social-title">Mis Redes</h2>

        <div className="social-icons">
          <a
            href="https://github.com/KevinVichi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaGithub size={30} />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaLinkedin size={30} />
            </div>
          </a>
          <a
            href="https://wa.me/593939873447"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon whatsapp"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaWhatsapp size={30} />
            </div>
          </a>
          <a
            href="mailto:kvichicela8375@uta.edu.ec"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon email"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaEnvelope size={30} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
