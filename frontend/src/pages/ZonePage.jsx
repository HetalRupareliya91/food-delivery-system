import { useEffect, useState } from 'react';
import * as api from '../api/zone.api';

export const meta = { path: '/zones', label: 'Zone' };

export default function ZonePage() {
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
    <section className="zone-page">
      <h1>Zone</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>name:</strong> {String(it.name ?? '')}</div>
              <div className="field"><strong>city:</strong> {String(it.city ?? '')}</div>
              <div className="field"><strong>radiusKm:</strong> {String(it.radiusKm ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
