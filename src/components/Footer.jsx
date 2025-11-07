export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="text-2xl font-semibold text-slate-900">Rankfox</p>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">
              We’re an AI-first SEO agency helping brands grow predictable organic traffic with technical excellence, smarter content, and authority that compounds.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-slate-900">Services</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900">Case studies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Get in touch</p>
            <p className="mt-3 text-sm text-slate-600">Email us at <a href="mailto:hello@rankfox.ai" className="underline">hello@rankfox.ai</a></p>
            <p className="mt-1 text-sm text-slate-600">© {new Date().getFullYear()} Rankfox. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
