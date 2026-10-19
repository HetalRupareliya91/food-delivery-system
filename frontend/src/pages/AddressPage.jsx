import { useEffect, useState } from 'react';
import * as api from '../api/address.api';

export const meta = { path: '/addresses', label: 'Address' };

export default function AddressPage() {
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
    <section className="address-page">
      <h1>Address</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>userId:</strong> {String(it.userId ?? '')}</div>
              <div className="field"><strong>line1:</strong> {String(it.line1 ?? '')}</div>
              <div className="field"><strong>city:</strong> {String(it.city ?? '')}</div>
              <div className="field"><strong>pincode:</strong> {String(it.pincode ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
