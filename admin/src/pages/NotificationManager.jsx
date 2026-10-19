import { useEffect, useState } from 'react';

const API = (import.meta.env.VITE_API_URL || 'http://localhost:4000') + '/api/notifications';
const FIELDS = ['userId', 'title', 'message', 'read'];

export const meta = { label: 'Notification' };

export default function NotificationManager() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  const load = () =>
    fetch(API)
      .then((r) => r.json())
      .then((d) => setRows(d.items || []))
      .catch((e) => setError(e.message));

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error || 'Save failed');
      return;
    }
    setForm({});
    setError(null);
    load();
  };

  const remove = async (id) => {
    await fetch(API + '/' + id, { method: 'DELETE' });
    load();
  };

  return (
    <section className="manager">
      <h2>Notification</h2>
      {error && <p className="error">{error}</p>}
      <form className="manager-form" onSubmit={submit}>
        {FIELDS.map((f) => (
          <input
            key={f}
            placeholder={f}
            value={form[f] || ''}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
          />
        ))}
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            {FIELDS.map((f) => (
              <th key={f}>{f}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              {FIELDS.map((f) => (
                <td key={f}>{String(r[f] ?? '')}</td>
              ))}
              <td>
                <button onClick={() => remove(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
