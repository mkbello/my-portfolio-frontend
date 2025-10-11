import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function onChange(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })); }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true });
    try {
      const res = await fetch((process.env.REACT_APP_API_URL || 'http://localhost:4000') + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus({ success: true });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ error: data.error || 'Send failed' });
      }
    } catch (err) {
      setStatus({ error: 'Network error' });
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="card">
        <form onSubmit={onSubmit}>
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
          <input name="email" value={form.email} onChange={onChange} placeholder="Your email" type="email" required />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="6" required />
          <div style={{ marginTop: 10 }}>
            <button className="btn" type="submit">Send</button>
          </div>
          {status?.loading && <p>Sending…</p>}
          {status?.success && <p style={{ color: 'green' }}>Message sent, thanks!</p>}
          {status?.error && <p style={{ color: 'red' }}>{status.error}</p>}
        </form>
      </div>
    </section>
  );
}
