function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-1/3 w-[800px] h-[800px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              New: Join this week and get your first month 50% off
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Puregym
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400">
                Fitness for every body
              </span>
            </h1>

            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              24/7 access, premium equipment, and flexible memberships. Everything you need to hit your goals, with zero pressure and no contracts.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#memberships" className="inline-flex items-center rounded-xl bg-emerald-500 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
                Start your free pass
              </a>
              <a href="#facilities" className="inline-flex items-center rounded-xl border border-white/15 text-white px-6 py-3 hover:bg-white/5 transition">
                Explore facilities
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-slate-300/80">
              <div>
                <div className="text-2xl font-black text-white">300+</div>
                Gyms nationwide
              </div>
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                Access every day
              </div>
              <div>
                <div className="text-2xl font-black text-white">0</div>
                Joining fees
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-cyan-400/10 to-transparent rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
              alt="Puregym hero" className="relative rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
