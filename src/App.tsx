import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Specials from './components/Specials.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import BookingPage from './components/BookingPage.jsx';
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
        <BookingPage />
      </main>
      <Footer />
    </>
  );
}
