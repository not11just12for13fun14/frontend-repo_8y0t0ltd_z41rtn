function Features() {
  const features = [
    {
      title: 'Open 24/7',
      desc: 'Train on your schedule with round-the-clock access to all clubs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
      ),
    },
    {
      title: 'Flexible memberships',
      desc: 'No contracts. Pause or cancel anytime, no questions asked.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h10M7 19h10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
        </svg>
      ),
    },
    {
      title: 'Premium equipment',
      desc: 'Train with the latest cardio, strength, and functional kit.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M6 12a2 2 0 110-4h12a2 2 0 110 4M6 12a2 2 0 100 4h12a2 2 0 100-4" />
        </svg>
      ),
    },
    {
      title: 'Classes included',
      desc: 'From HIIT to yoga — expert-led sessions for all levels.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      ),
    },
  ]

  return (
    <section id="facilities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Everything you need</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Expert kit, spacious studios, and clean, modern facilities to help you train your way.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
