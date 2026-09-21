"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type ContactFormProps = {
  email: string
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

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
      `${message}\n\n— ${name}${from ? ` (${from})` : ""}${phone ? `\nPhone: ${phone}` : ""}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 text-center">
      <label className="grid gap-2 text-sm text-ink-soft">
        Name
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
        Email
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
        Phone
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="border border-leather/20 bg-cream px-4 py-3 text-ink outline-none focus:border-gold-deep"
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
      <label className="flex items-start gap-3 text-left text-sm leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 shrink-0"
          required
        />
        <span>
          I agree to Manchester Apostolic Brethren Church storing my contact
          details to respond to my inquiry in line with the{" "}
          <Link href="/privacy/" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </span>
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
