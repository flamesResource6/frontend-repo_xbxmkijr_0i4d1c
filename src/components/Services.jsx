import { Search, Sparkles, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Technical SEO Audits',
    desc: 'Crawl, indexation, Core Web Vitals, and site architecture fixed with precision.'
  },
  {
    icon: Sparkles,
    title: 'AI Content Optimization',
    desc: 'NLP-driven briefs, entity coverage, and on-page improvements that match intent.'
  },
  {
    icon: BarChart3,
    title: 'Growth Strategy',
    desc: 'Keyword clustering, topic maps, and content calendars prioritized by ROI.'
  },
  {
    icon: Shield,
    title: 'Authority & Digital PR',
    desc: 'White-hat link acquisition and brand signals that compound over time.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What we do</h2>
          <p className="mt-3 text-slate-600">Full-funnel SEO — from technical foundations to content and authority — powered by AI.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
