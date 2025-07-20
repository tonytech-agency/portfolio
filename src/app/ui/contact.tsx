'use client';

import { useState } from "react";

export default function ContactForm() {
  const [subEmail, setSubEmail] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "subscribe", email: subEmail }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Terima kasih telah subscribe!");
      setSubEmail("");
    } else {
      setMessage("Gagal subscribe.");
    }
  };

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...contactForm }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Pesan berhasil dikirim!");
      setContactForm({ name: "", email: "", message: "" });
    } else {
      setMessage("Gagal kirim pesan.");
    }
  };

  return (
    <section id="contact" className="p-4">
      <h1 className="">Hubungi Kami</h1>

      <form onSubmit={handleSubscribe} className="">
        <input
          type="email"
          placeholder="Masukkan email"
          value={subEmail}
          onChange={(e) => setSubEmail(e.target.value)}
          required
          className=""
        />
        <button type="submit" className="">Subscribe</button>
      </form>

      <form onSubmit={handleContact} className="">
        <input
          type="text"
          placeholder="Nama"
          value={contactForm.name}
          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
          required
          className=""
        />
        <input
          type="email"
          placeholder="Email"
          value={contactForm.email}
          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
          required
          className=""
        />
        <textarea
          placeholder="Pesan"
          value={contactForm.message}
          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
          required
          className=""
        />
        <button type="submit" className="">Kirim Pesan</button>
      </form>

      {message && <p className="">{message}</p>}
    </section>
  );
}
