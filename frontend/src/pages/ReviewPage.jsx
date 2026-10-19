import { useEffect, useState } from 'react';
import * as api from '../api/review.api';

export const meta = { path: '/reviews', label: 'Review' };

export default function ReviewPage() {
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
    <section className="review-page">
      <h1>Review</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>userId:</strong> {String(it.userId ?? '')}</div>
              <div className="field"><strong>restaurantId:</strong> {String(it.restaurantId ?? '')}</div>
              <div className="field"><strong>rating:</strong> {String(it.rating ?? '')}</div>
              <div className="field"><strong>comment:</strong> {String(it.comment ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
