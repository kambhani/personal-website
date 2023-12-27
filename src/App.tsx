import useDarkMode from "use-dark-mode";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
  useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  return (
    <main>
      <Nav />
      <Hero />
      <Education />
      <Experience />
    </main>
  );
}

export default App;
