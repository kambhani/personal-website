import useDarkMode from "use-dark-mode";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";
import Credentials from "./components/credentials";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies";
import Footer from "./components/footer";

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
      <Hobbies />
      <Footer />
    </main>
  );
}

export default App;
