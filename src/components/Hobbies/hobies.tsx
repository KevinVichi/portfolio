import { useInView } from "../../Hook/hook";
import "./hobbies.css";

const Hobbies = () => {
  const { ref, isInView } = useInView();

  const hobbies = [
    {
      name: "Videojuegos",
      icon: "🎮",
      description: "Me apasionan los juegos cooperativos",
    },
    {
      name: "Música",
      icon: "🎵",
      description: "Me fascina escuchar composiciones de piano y violín",
    },
    {
      name: "Deportes",
      icon: "⚽",
      description: "Disfruto del ciclismo",
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
