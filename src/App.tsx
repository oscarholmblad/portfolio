import { MotionConfig } from "motion/react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default App;
