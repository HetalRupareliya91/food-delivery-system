import { useState } from 'react';

// Every manager in ./pages exports `meta` ({ label }) and a default component
const modules = import.meta.glob('./pages/*.jsx', { eager: true });
const managers = Object.values(modules)
  .filter((m) => m.meta)
  .map((m) => ({ ...m.meta, Component: m.default }));

export default function App() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const Current = managers[active] && managers[active].Component;

  return (
    <div className="admin">
      <aside className={open ? 'sidebar open' : 'sidebar'}>
        <div className="sidebar-head">
          <h1>FoodDash Admin</h1>
          <button className="menu-toggle" onClick={() => setOpen(!open)}>&#9776;</button>
        </div>
        <nav>
          {managers.map((m, i) => (
            <button key={m.label} className={i === active ? 'active' : ''} onClick={() => { setActive(i); setOpen(false); }}>
              {m.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">
        {Current ? <Current /> : <p>No modules installed yet.</p>}
      </main>
    </div>
  );
}
