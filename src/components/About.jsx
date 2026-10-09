import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section className="story-section section-pad" id="story">
      <div className="container story-grid">
        <div className="story-visual">
          <img className="story-image story-image--main" src="/about-1.jpg" alt="A welcoming corner of the Little Lemon restaurant" />
          <img className="story-image story-image--small" src="/about-2.jpg" alt="Mediterranean ingredients prepared with care" />
          <div className="story-number">01 <span>— OUR STORY</span></div>
        </div>
        <div className="story-copy">
          <SectionHeading eyebrow="A TABLE WITH A STORY" title={<>Rooted in tradition.<br /><em>Made for today.</em></>} />
          <p>Little Lemon began with two brothers, a family kitchen, and a belief that the best memories are made around a table. Inspired by the sun-soaked flavours of the Mediterranean, we bring classic recipes to life with fresh ingredients and a modern touch.</p>
          <p>Nothing too fancy. Nothing rushed. Just honest food, generous hospitality, and a seat saved for you.</p>
          <div className="signature"><span className="signature-mark">LL.</span><span><strong>Mario & Adrian</strong><small>FOUNDERS, LITTLE LEMON</small></span></div>
        </div>
      </div>
    </section>
  );
}
