import "./App.css";
import StarsBackground from "./components/Star/StarsBackground";
import Music from "./components/Music/music";
import Menu from "./components/Menu/menu";
import Name from "./components/Name/name";
import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Social from "./components/Social/social";
import Hobbies from "./components/Hobbies/hobies";
import Education from "./components/Education/education";

function App() {
  return (
    <>
      <Menu />
      <StarsBackground />
      <Music />
      <Name />
      <Profile />
      <Skills />
      <Projects />
      <Hobbies />
      <Education />
      <Contact />
      <Social />
    </>
  );
}

export default App;
