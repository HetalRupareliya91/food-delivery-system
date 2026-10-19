import { useEffect, useState } from 'react';
import * as api from '../api/favorite.api';

export const meta = { path: '/favorites', label: 'Favorite' };

export default function FavoritePage() {
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
    <section className="favorite-page">
      <h1>Favorite</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>userId:</strong> {String(it.userId ?? '')}</div>
              <div className="field"><strong>restaurantId:</strong> {String(it.restaurantId ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
