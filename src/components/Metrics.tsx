import { metrics } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Metrics() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="metrics" className="scroll-mt-20 pt-12 pb-20 bg-white dark:bg-slate-navy2 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            Business Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-navy dark:text-white leading-tight">
            Results that{' '}
            <span className="text-gradient-green">speak for themselves.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-navy dark:to-slate-navy2 border border-slate-200 dark:border-slate-700/50 card-hover hover:border-brand-blue/40 dark:hover:border-brand-blue/40 overflow-hidden text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-2xl group-hover:bg-brand-blue/15 transition-colors" />

              <div className="relative">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-brand-blue/10 items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                  <metric.icon size={28} className="text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-gradient-blue mb-2">
                  {metric.value}
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
