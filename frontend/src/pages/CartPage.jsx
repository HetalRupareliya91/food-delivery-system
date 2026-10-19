import { useEffect, useState } from 'react';
import * as api from '../api/cart.api';

export const meta = { path: '/carts', label: 'Cart' };

export default function CartPage() {
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
    <section className="cart-page">
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>userId:</strong> {String(it.userId ?? '')}</div>
              <div className="field"><strong>items:</strong> {String(it.items ?? '')}</div>
              <div className="field"><strong>total:</strong> {String(it.total ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
