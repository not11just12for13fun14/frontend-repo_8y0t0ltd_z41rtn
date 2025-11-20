function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 14.99,
      features: ['24/7 gym access', 'All equipment', 'Locker rooms'],
      highlight: false,
    },
    {
      name: 'Plus',
      price: 19.99,
      features: ['Everything in Basic', 'Group classes', 'Guest pass 4x/month'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: 24.99,
      features: ['Everything in Plus', 'Multi-club access', 'Sports massage 1x/month'],
      highlight: false,
    },
  ]

  return (
    <section id="memberships" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Memberships made simple</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Pick a plan that fits your lifestyle. No contracts, cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border ${plan.highlight ? 'border-emerald-400/40 bg-emerald-400/5' : 'border-white/10 bg-white/5'} p-6` }>
              {plan.highlight && (
                <div className="absolute -top-3 left-6 text-xs px-2 py-1 rounded-full bg-emerald-500 text-slate-900 font-semibold">Most popular</div>
              )}
              <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
              <div className="flex items-end gap-1 mt-3">
                <div className="text-4xl font-black text-white">£{plan.price}</div>
                <div className="text-slate-300">/mo</div>
              </div>
              <ul className="mt-6 space-y-2 text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-400 inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2 font-semibold ${plan.highlight ? 'bg-emerald-500 text-slate-900' : 'border border-white/15 text-white hover:bg-white/5'}`}>Choose {plan.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
