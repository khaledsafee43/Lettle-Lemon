import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Specials from './components/Specials.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Visit from './components/Visit.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
