import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            AI SEO Agency
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Rank higher with AI-driven SEO that actually works
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Rankfox blends machine intelligence with human expertise to optimize your content, technical foundation, and authority — so you grow organic traffic predictably.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-medium shadow hover:shadow-md transition">
              View Pricing
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-slate-900 font-medium border border-slate-200 backdrop-blur hover:bg-white">
              What We Do
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
      </div>
    </section>
  );
}
