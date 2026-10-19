import { useEffect, useState } from 'react';
import * as api from '../api/rider.api';

export const meta = { path: '/riders', label: 'Rider' };

export default function RiderPage() {
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
    <section className="rider-page">
      <h1>Rider</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>name:</strong> {String(it.name ?? '')}</div>
              <div className="field"><strong>phone:</strong> {String(it.phone ?? '')}</div>
              <div className="field"><strong>vehicle:</strong> {String(it.vehicle ?? '')}</div>
              <div className="field"><strong>isAvailable:</strong> {String(it.isAvailable ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
