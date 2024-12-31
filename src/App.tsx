import "./App.css";
import StarsBackground from "./components/Star/StarsBackground";
import Music from "./components/Music/music";
import Menu from "./components/Menu/menu";
import Name from "./components/Name/name";
import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills"; // Añade esta línea
import Projects from "./components/Projects/project";

function App() {
  return (
    <>
      <Menu />
      <StarsBackground />
      <Music />
      <Name />
      <Profile />
      <Skills /> {/* Añade esta línea */}
      <Projects />
    </>
  );
}

export default App;
