import { useInView } from "../../Hook/hook";
import "./hobbies.css";

const Hobbies = () => {
  const { ref, isInView } = useInView();

  const hobbies = [
    {
      name: "Videojuegos 🎮",
      image: "/juegoCooperativo.webp", // Añadir imagen relacionada con gaming
      description: "Me apasionan los juegos cooperativos",
    },
    {
      name: "Música 🎵",
      image: "/piano2.webp", // Añadir imagen de piano y violín
      description: "Me fascina escuchar composiciones de piano y violín",
    },
    {
      name: "Deportes 🚲",
      image: "/ciclismo.jpg", // Añadir imagen de ciclismo
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
            <img src={hobby.image} alt={hobby.name} className="hobby-image" width={300} height={200} />
            <div className="hobby-textBox">
              <h3 className="hobby-name">{hobby.name}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
