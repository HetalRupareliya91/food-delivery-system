import { useEffect, useState } from 'react';
import * as api from '../api/banner.api';

export const meta = { path: '/banners', label: 'Banner' };

export default function BannerPage() {
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
    <section className="banner-page">
      <h1>Banner</h1>
      {items.length === 0 ? (
        <p className="muted">Nothing here yet.</p>
      ) : (
        <ul className="card-list">
          {items.map((it) => (
            <li key={it.id} className="card">
              <div className="field"><strong>title:</strong> {String(it.title ?? '')}</div>
              <div className="field"><strong>imageUrl:</strong> {String(it.imageUrl ?? '')}</div>
              <div className="field"><strong>link:</strong> {String(it.link ?? '')}</div>
              <div className="field"><strong>active:</strong> {String(it.active ?? '')}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
