import { useEffect, useState } from 'react';
import * as api from '../api/user.api';

export const meta = { path: '/users', label: 'User' };

export default function UserPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .list()
      .then((res) => setItems(res.items || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <section className="user-page">
      <h1>User</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>name:</strong> {String(it.name ?? '')}</div>
              <div className="field"><strong>email:</strong> {String(it.email ?? '')}</div>
              <div className="field"><strong>phone:</strong> {String(it.phone ?? '')}</div>
              <div className="field"><strong>role:</strong> {String(it.role ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
