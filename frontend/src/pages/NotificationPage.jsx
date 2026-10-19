import { useEffect, useState } from 'react';
import * as api from '../api/notification.api';

export const meta = { path: '/notifications', label: 'Notification' };

export default function NotificationPage() {
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
    <section className="notification-page">
      <h1>Notification</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>userId:</strong> {String(it.userId ?? '')}</div>
              <div className="field"><strong>title:</strong> {String(it.title ?? '')}</div>
              <div className="field"><strong>message:</strong> {String(it.message ?? '')}</div>
              <div className="field"><strong>read:</strong> {String(it.read ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
