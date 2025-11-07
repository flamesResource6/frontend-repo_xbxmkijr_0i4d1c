import { Check } from 'lucide-react';

function Tier({ name, price, period = '/mo', features, cta }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        <span className="text-slate-500">{period}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-slate-700">
            <Check className="mt-0.5 text-emerald-600" size={18} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-white font-medium hover:shadow-md transition">
        {cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start small or scale up — each plan includes our AI optimization engine and expert oversight.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tier
            name="Starter"
            price="$799"
            features={[
              'Site audit & quick wins',
              '10 content optimizations',
              'Keyword & topic discovery',
              'Monthly report',
            ]}
            cta="Get started"
          />
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 opacity-20 blur" />
            <div className="relative">
              <Tier
                name="Growth"
                price="$1,999"
                features={[
                  'Technical fixes & monitoring',
                  '30 content optimizations',
                  'Content calendar & briefs',
                  'Digital PR & link outreach',
                ]}
                cta="Scale with Rankfox"
              />
            </div>
          </div>
          <Tier
            name="Enterprise"
            price="Custom"
            period=""
            features={[
              'Multi-domain strategy',
              'Dedicated consultant',
              'AI content workflows',
              'SLAs & training',
            ]}
            cta="Book a consult"
          />
        </div>
      </div>
    </section>
  );
}
