function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center">
            <span className="text-slate-900 font-black">P</span>
          </div>
          <span className="text-slate-300">© {new Date().getFullYear()} Puregym</span>
        </div>
        <div className="text-slate-400 text-sm">
          Train your way • No contracts • Open 24/7
        </div>
      </div>
    </footer>
  )
}

export default Footer
