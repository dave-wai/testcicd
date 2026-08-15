import { useEffect, useState } from 'react'

// Replace with your real Formspree form ID (from https://formspree.io/forms).
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

export default function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.target

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-2xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-2xl sm:p-12 dark:border-neutral-800 dark:bg-neutral-900">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
        >
          ✕
        </button>

        <div className="mb-8 text-center">
          <h2 className="mb-3 text-[1.5rem] font-bold tracking-tight sm:text-2xl">Have a workflow worth automating?</h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Let's talk about what's slowing your team down and where AI can actually help.
          </p>
        </div>

        {status === 'success' ? (
          <p className="rounded-xl bg-emerald-500/10 px-5 py-4 text-center font-medium text-emerald-600 dark:text-emerald-400">
            Thanks — your message is in. I'll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                Company <span className="text-neutral-400">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                What are you looking to automate?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-indigo-500 dark:border-neutral-700 dark:bg-neutral-800"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm font-medium text-red-500">
                Something went wrong sending that — try again, or email dave.wai@outlook.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
