import "./App.css";
import StarsBackground from "./components/Star/StarsBackground";
import Music from "./components/Music/music";
import Menu from "./components/Menu/menu";
import Name from "./components/Name/name";
import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills"; // Añade esta línea

function App() {
  return (
    <>
      <StarsBackground />
      <Music />
      <Menu />
      <Name />
      <Profile />
      <Skills /> {/* Añade esta línea */}
    </>
  );
}

export default App;
