import Brand from './Brand.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><Brand light /><p>A little Mediterranean sunshine,<br />right here in Chicago.</p></div>
        <div className="footer-column"><h3>EXPLORE</h3><a href="#top">Home</a><a href="#story">Our story</a><a href="#menu">Menu</a></div>
        <div className="footer-column"><h3>COME SAY HELLO</h3><span>123 Mediterranean Avenue</span><span>Chicago, IL</span><span>(555) 123-4567</span><span>info@littlelemon.com</span></div>
        <div className="footer-note"><span>GOOD FOOD.</span><span>GOOD PEOPLE.</span><strong>GOOD LEMON.</strong><b>✳</b></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 LITTLE LEMON. MADE WITH CARE.</span><span>FRESH INGREDIENTS · FULL HEARTS</span></div>
    </footer>
  );
}
