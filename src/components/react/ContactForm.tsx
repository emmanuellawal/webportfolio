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
        setMessage('Message sent. I will reply soon.');
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
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="form-input resize-y min-h-[7rem]"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full py-3 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === 'error' ? 'text-[var(--destructive)]' : 'text-[var(--success)]'}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
