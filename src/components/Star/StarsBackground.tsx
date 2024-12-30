import "./StarsBackground.css";

const StarsBackground = () => {
  return (
    <div className="stars">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={
            {
              "--top-offset": `${Math.random() * 100}vh`,
              "--fall-delay": `-${Math.random() * 30}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default StarsBackground;
