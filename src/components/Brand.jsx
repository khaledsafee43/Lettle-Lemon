export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#top"
      aria-label="Little Lemon home"
    >
      <img src="/logo.svg" alt="" />
      <span>
        little<span className="brand__lemon">lemon</span>
        <small>MEDITERRANEAN KITCHEN</small>
      </span>
    </a>
  );
}
