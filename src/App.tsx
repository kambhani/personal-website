import useDarkMode from "use-dark-mode";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";
import Credentials from "./components/credentials";

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
    </main>
  );
}

export default App;
