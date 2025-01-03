import "./profile.css";
import { useInView } from "../../Hook/hook";

const Profile = () => {
  const { ref, isInView } = useInView();
  return (
    <section
      ref={ref}
      id="profile"
      className={`profile-container ${isInView ? "show" : ""}`}
    >
      <div className="profile-content">
        <div className="profile-image">
          <img src="/foto3.png" alt="Foto de perfil" />
        </div>
        <div className="profile-text">
          <h2 className="text-title">Objetivo Profesional</h2>
          <div className="card-details">
            <p className="text-body">
              Como Ingeniero en Software, busco desarrollar soluciones
              innovadoras y escalables que impacten positivamente en la
              sociedad. Mi objetivo es crecer profesionalmente en un ambiente
              dinámico donde pueda aplicar mis conocimientos en desarrollo web y
              nuevas tecnologías.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
