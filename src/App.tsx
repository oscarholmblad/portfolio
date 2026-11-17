import { MotionConfig } from "motion/react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Treeline from "./components/Treeline";
import LanguageProvider from "./i18n/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Header />
        <main id="innehall">
          <Hero />
          <Treeline above="forest" below="forest-light" />
          <About />
          <Treeline above="forest-light" below="forest" flip />
          <Projects />
          <Treeline above="forest" below="forest-light" />
          <Contact />
          <Treeline above="forest-light" below="forest" layered />
        </main>
        <Footer />
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
