import { useEffect, useState } from 'react';
import * as api from '../api/delivery.api';

export const meta = { path: '/deliveries', label: 'Delivery' };

export default function DeliveryPage() {
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
    <section className="delivery-page">
      <h1>Delivery</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>orderId:</strong> {String(it.orderId ?? '')}</div>
              <div className="field"><strong>riderId:</strong> {String(it.riderId ?? '')}</div>
              <div className="field"><strong>status:</strong> {String(it.status ?? '')}</div>
              <div className="field"><strong>eta:</strong> {String(it.eta ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
