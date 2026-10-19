import { useEffect, useState } from 'react';
import * as api from '../api/restaurant.api';

export const meta = { path: '/restaurants', label: 'Restaurant' };

export default function RestaurantPage() {
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
    <section className="restaurant-page">
      <h1>Restaurant</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>name:</strong> {String(it.name ?? '')}</div>
              <div className="field"><strong>address:</strong> {String(it.address ?? '')}</div>
              <div className="field"><strong>cuisine:</strong> {String(it.cuisine ?? '')}</div>
              <div className="field"><strong>isOpen:</strong> {String(it.isOpen ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
