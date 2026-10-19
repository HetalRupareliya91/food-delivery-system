import { useEffect, useState } from 'react';
import * as api from '../api/refund.api';

export const meta = { path: '/refunds', label: 'Refund' };

export default function RefundPage() {
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
    <section className="refund-page">
      <h1>Refund</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>orderId:</strong> {String(it.orderId ?? '')}</div>
              <div className="field"><strong>amount:</strong> {String(it.amount ?? '')}</div>
              <div className="field"><strong>reason:</strong> {String(it.reason ?? '')}</div>
              <div className="field"><strong>status:</strong> {String(it.status ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
