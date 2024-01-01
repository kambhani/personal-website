import useDarkMode from "use-dark-mode";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";
import Credentials from "./components/credentials";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Education />
      <Experience />
      <Credentials />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
