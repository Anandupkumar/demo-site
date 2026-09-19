"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  email: string
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  if (!email) {
    return (
      <p className="border border-leather/15 bg-cream/60 px-6 py-5 text-center text-ink-soft">
        A contact email has not been published yet. Please visit us on the
        Lord&apos;s Day, or speak with a brother at the door.
      </p>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${from ? ` (${from})` : ""}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 text-center">
      <label className="grid gap-2 text-sm text-ink-soft">
        Your name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-leather/20 bg-cream px-4 py-3 text-ink outline-none focus:border-gold-deep"
          required
        />
      </label>
      <label className="grid gap-2 text-sm text-ink-soft">
        Your email
        <input
          type="email"
          name="email"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="border border-leather/20 bg-cream px-4 py-3 text-ink outline-none focus:border-gold-deep"
          required
        />
      </label>
      <label className="grid gap-2 text-sm text-ink-soft">
        Message
        <textarea
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="border border-leather/20 bg-cream px-4 py-3 text-ink outline-none focus:border-gold-deep"
          required
        />
      </label>
      <button
        type="submit"
        className="justify-self-center bg-leather px-7 py-3 font-heading text-[0.72rem] tracking-[0.22em] uppercase text-ivory hover:bg-leather-mid"
      >
        Send message
      </button>
    </form>
  );
}
