import { useState } from 'react';

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!WEB3FORMS_KEY) {
      const email = formData.get('email') as string;
      const subject = encodeURIComponent(`Portfolio contact from ${formData.get('name')}`);
      const body = encodeURIComponent(formData.get('message') as string);
      window.location.href = `mailto:emmanuellawal2024@gmail.com?subject=${subject}&body=${body}%0A%0AFrom:%20${email}`;
      setStatus('success');
      setMessage('Opening your email client…');
      return;
    }

    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage('Message sent! I will get back to you soon.');
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please email me directly.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
          Name <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-border bg-background/50 px-4 py-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
          Email <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-background/50 px-4 py-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
          Message <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-border bg-background/50 px-4 py-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-3 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
