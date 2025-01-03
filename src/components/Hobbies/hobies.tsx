import { useInView } from "../../Hook/hook";
import "./hobbies.css";

const Hobbies = () => {
  const { ref, isInView } = useInView();

  const hobbies = [
    {
      name: "Videojuegos",
      icon: "🎮",
      description: "Disfruto de los juegos de estrategia y RPG",
    },
    {
      name: "Música",
      icon: "🎵",
      description: "Me gusta escuchar y tocar guitarra",
    },
    {
      name: "Deportes",
      icon: "⚽",
      description: "Practico fútbol y baloncesto",
    },
  ];

  return (
    <section
      ref={ref}
      id="hobbies"
      className={`hobbies-section ${isInView ? "show" : ""}`}
    >
      <h2 className="hobbies-title">Mis Hobbies</h2>
      <div className="hobbies-container">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <span className="hobby-icon">{hobby.icon}</span>
            <h3 className="hobby-name">{hobby.name}</h3>
            <p className="hobby-description">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
