import { useState, useRef, useEffect } from "react";
import PowerButton from "../Boton/PowerButton";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    try {
      const audio = new Audio("/lovely.mp3");
      audio.onended = () => {
        audio.currentTime = 0;
        audio.play();
        console.log("🔄 Reiniciando reproducción");
      };
      audioRef.current = audio;
      console.log("🎵 Audio inicializado correctamente");
    } catch (error) {
      console.error("❌ Error al inicializar audio:", error);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        console.log("🔄 Audio limpiado en cleanup");
      }
    };
  }, []);

  const handleToggleMusic = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!audioRef.current) {
      console.error("❌ Referencia de audio no disponible");
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        console.log("⏸️ Audio pausado");
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        console.log("▶️ Audio reproduciendo");
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("❌ Error al manipular audio:", error);
      setIsPlaying(false);
    }
  };

  return (
    <div onClick={handleToggleMusic}>
      <PowerButton isPlaying={isPlaying} />
    </div>
  );
};

export default Music;
