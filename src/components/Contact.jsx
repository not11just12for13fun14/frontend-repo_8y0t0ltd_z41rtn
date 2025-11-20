import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we will be in touch!')
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Get your free gym pass</h2>
            <p className="mt-3 text-slate-300">Try Puregym free for a day. Pop in your details and we'll send a pass to your inbox.</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Full name</label>
                <input required className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Alex Johnson" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input type="email" required className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Nearest club</label>
                <select className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option className="bg-slate-900">London</option>
                  <option className="bg-slate-900">Manchester</option>
                  <option className="bg-slate-900">Birmingham</option>
                </select>
              </div>
              <button className="inline-flex items-center rounded-xl bg-emerald-500 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">Send me a pass</button>
              {status && <p className="text-emerald-400 text-sm">{status}</p>}
            </form>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-cyan-400/10 to-transparent rounded-3xl blur-2xl" />
            <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop" alt="Gym facilities" className="relative rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
