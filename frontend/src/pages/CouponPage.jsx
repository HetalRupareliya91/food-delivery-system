import { useEffect, useState } from 'react';
import * as api from '../api/coupon.api';

export const meta = { path: '/coupons', label: 'Coupon' };

export default function CouponPage() {
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
    <section className="coupon-page">
      <h1>Coupon</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>code:</strong> {String(it.code ?? '')}</div>
              <div className="field"><strong>discount:</strong> {String(it.discount ?? '')}</div>
              <div className="field"><strong>minOrder:</strong> {String(it.minOrder ?? '')}</div>
              <div className="field"><strong>expiresAt:</strong> {String(it.expiresAt ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
