import useDarkMode from "use-dark-mode";
import Nav from "./components/nav";
import Hero from "./components/hero";

function App() {
  useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}

export default App;
