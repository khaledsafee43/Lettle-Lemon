export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A LITTLE TASTE OF THE MEDITERRANEAN</p>
          <h1>Good food.<br /><em>Good mood.</em><br />Great company.</h1>
          <p className="hero-description">Family recipes, fresh ingredients, and the kind of meal that makes you want to stay a little longer.</p>
          <div className="hero-actions">
            <a className="button button--yellow" href="#menu">Explore our menu <span aria-hidden="true">↗</span></a>
            <span className="hero-meta">Made fresh daily <b>·</b> Served with love</span>
          </div>
          <div className="hero-rating"><span className="stars">★★★★★</span><span><strong>4.9/5</strong> from our lovely guests</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><img src="/restauranfood.jpg" alt="Fresh Mediterranean food prepared in the Little Lemon kitchen" /></div>
          <div className="image-stamp"><span>FRESH</span><b>every<br />single day</b><span className="stamp-lemon">✳</span></div>
          <div className="hero-caption"><span className="caption-line" /> SIMPLE INGREDIENTS, BIG FLAVOUR</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>01 / 03</span><span className="bottom-line" /><span>FRESH FROM OUR KITCHEN</span></div>
    </section>
  );
}
