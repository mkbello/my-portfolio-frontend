
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  // API base URL: empty in dev (proxy handles it), env in production
  const API_URL = process.env.REACT_APP_API_URL || "";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await axios.post(`${API_URL}/api/contact`, form);
      if (res.data.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-2xl shadow"
      >
        <div>
          <label className="block text-sm">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 mt-2">Message sent, thank you!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">
            Something went wrong, try again later.
          </p>
        )}
      </form>
    </section>
  );
}
