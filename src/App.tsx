import { useRef } from "react";
import useDarkMode from "use-dark-mode";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
  useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  const options = {
    smooth: true,
  };
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider options={options} containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        <Nav />
        <Hero />
        <Education />
        <Experience />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
