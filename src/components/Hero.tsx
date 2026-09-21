import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 relative flex items-center overflow-hidden pt-[5.5rem] pb-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-40 dark:opacity-20" />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue/20 dark:bg-brand-blue/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-green/20 dark:bg-brand-green/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-navy" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-4xl">
          <a
            href="https://www.fiverr.com/users/harisanwarlodhi/seller_dashboard"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="group relative z-20 inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 font-medium text-sm cursor-pointer shadow-[0_0_12px_rgba(34,197,94,0.2)] hover:bg-emerald-400/25 hover:border-emerald-300 hover:text-white hover:scale-105 hover:ring-2 hover:ring-emerald-400/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.8),0_0_15px_rgba(34,197,94,0.5)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 transition-all duration-300 mb-6 animate-fade-in"
          >
            <Sparkles size={16} className="pointer-events-none text-emerald-400 group-hover:text-white transition-colors duration-300" />
            <span className="pointer-events-none text-sm font-medium">
              Available for freelance &amp; collaboration
            </span>
            <span className="pointer-events-none relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:bg-emerald-200 transition-colors duration-300" />
            </span>
          </a>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-slate-navy dark:text-white animate-fade-in-up">
            Engineering Intuitive{' '}
            <span className="text-gradient-blue">Front-End Experiences</span>{' '}
            &amp; Driving{' '}
            <span className="text-gradient-green">Digital Growth.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            Final-year Computer Science Student &amp; UI/UX Front-End Developer with 2+ years of
            hands-on experience building conversion-focused websites and brand identities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-brand-blue hover:bg-brand-blueDark rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-brand-green dark:text-brand-greenLight bg-brand-green/10 hover:bg-brand-green/20 dark:bg-brand-green/15 dark:hover:bg-brand-green/25 rounded-xl transition-all border border-brand-green/30 hover:border-brand-green/50"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick stats strip */}
          <div className="mt-12 flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '2027', label: 'CS Graduation' },
              { value: '1,500+', label: 'Customer Deals' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-display font-bold text-slate-navy dark:text-white">{stat.value}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </div>
    </section>
  );
}
