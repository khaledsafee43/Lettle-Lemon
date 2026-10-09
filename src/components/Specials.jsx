import menuItems from '../data/menuItems.js';
import SectionHeading from './SectionHeading.jsx';

function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-image"><img src={item.image} alt={item.name} /><span>{item.label}</span></div>
      <div className="menu-card-content">
        <div className="menu-card-title"><h3>{item.name}</h3><strong>{item.price}</strong></div>
        <p>{item.description}</p>
        <div className="menu-card-foot"><span>PREPARED FRESH</span><span aria-hidden="true">✳</span></div>
      </div>
    </article>
  );
}

export default function Specials() {
  return (
    <section className="menu-section section-pad" id="menu">
      <div className="container">
        <div className="menu-heading-row">
          <SectionHeading eyebrow="FROM OUR KITCHEN" title={<>A few of our <em>favourites.</em></>} description="Seasonal ingredients, familiar comforts, and a Mediterranean twist on every plate." />
          <div className="menu-side-note"><span className="note-star">✳</span><span>THE GOOD STUFF<br />IS ALWAYS FRESH</span></div>
        </div>
        <div className="menu-grid">{menuItems.map(item => <MenuCard key={item.id} item={item} />)}</div>
        <div className="menu-bottom-note"><span>GOOD FOOD DOESN’T NEED TO BE COMPLICATED.</span><span>JUST MADE WITH CARE. <b>✳</b></span></div>
      </div>
    </section>
  );
}
