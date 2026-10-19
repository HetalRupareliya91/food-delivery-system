import { useEffect, useState } from 'react';
import * as api from '../api/setting.api';

export const meta = { path: '/settings', label: 'Setting' };

export default function SettingPage() {
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
    <section className="setting-page">
      <h1>Setting</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>key:</strong> {String(it.key ?? '')}</div>
              <div className="field"><strong>value:</strong> {String(it.value ?? '')}</div>
              <div className="field"><strong>scope:</strong> {String(it.scope ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
