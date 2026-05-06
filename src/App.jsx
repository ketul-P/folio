import Nav from './components/Nav';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
