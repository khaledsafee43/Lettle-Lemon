import Brand from './Brand.jsx';

const links = [
  ['Home', '#top'],
  ['Our story', '#story'],
  ['Menu', '#menu'],
  ['Reviews', '#reviews'],
  ['Visit us', '#visit'],
];

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <span className="header-note"><span className="status-dot" /> CHICAGO · EST. 1998</span>
      </div>
    </header>
  );
}
