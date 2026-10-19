import { useEffect, useState } from 'react';

// Every page in ./pages exports `meta` ({ path, label }) and a default component
const modules = import.meta.glob('./pages/*.jsx', { eager: true });
const pages = Object.values(modules)
  .filter((m) => m.meta)
  .map((m) => ({ ...m.meta, Component: m.default }));

function useHashPath() {
  const read = () => window.location.hash.slice(1) || '/';
  const [path, setPath] = useState(read());
  useEffect(() => {
    const onChange = () => setPath(read());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return path;
}

export default function App() {
  const path = useHashPath();
  const [menuOpen, setMenuOpen] = useState(false);
  const current = pages.find((p) => p.path === path);

  return (
    <div className="app">
      <header className="topbar">
        <a href="#/" className="brand">FoodDash</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          &#9776;
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} onClick={() => setMenuOpen(false)}>
          {pages.map((p) => (
            <a key={p.path} href={'#' + p.path} className={p.path === path ? 'active' : ''}>
              {p.label}
            </a>
          ))}
        </nav>
      </header>
      <main className="container">
        {current ? <current.Component /> : <Home count={pages.length} />}
      </main>
      <footer className="footer">FoodDash &copy; {new Date().getFullYear()}</footer>
    </div>
  );
}

function Home({ count }) {
  return (
    <section className="hero">
      <h1>Hungry? Order from the best restaurants near you.</h1>
      <p>Fast delivery, live tracking and great offers.</p>
      <p className="muted">{count} sections available</p>
    </section>
  );
}
