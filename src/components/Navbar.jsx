import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-md bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.45)]">
                <span className="text-slate-900 font-black">P</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Puregym</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
              <a href="#memberships" className="inline-flex items-center rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2 shadow-lg shadow-emerald-500/25 hover:brightness-110 transition">
                Join now
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {open ? (
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/80">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200">
                  {item.label}
                </a>
              ))}
              <a href="#memberships" onClick={() => setOpen(false)} className="inline-flex items-center rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2">
                Join now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
