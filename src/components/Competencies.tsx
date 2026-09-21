import { competencies } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Competencies() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="skills" className="scroll-mt-20 pt-12 pb-20 bg-white dark:bg-slate-navy2 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-navy dark:text-white leading-tight">
            A multidisciplinary toolkit for{' '}
            <span className="text-gradient-blue">digital success.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Five pillars that let me own a project from first pixel to final conversion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, i) => (
            <div
              key={comp.title}
              className="group relative p-7 rounded-2xl bg-slate-50 dark:bg-slate-navy border border-slate-200 dark:border-slate-700/50 card-hover hover:border-brand-blue/40 dark:hover:border-brand-blue/40 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 dark:from-brand-blue/20 dark:to-brand-blue/5 flex items-center justify-center mb-5 group-hover:from-brand-blue group-hover:to-brand-blueDark transition-all">
                <comp.icon size={28} className="text-brand-blue group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-display font-semibold text-slate-navy dark:text-white mb-2">
                {comp.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {comp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {comp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-700/50 rounded-md group-hover:bg-brand-blue/10 group-hover:text-brand-blue dark:group-hover:text-brand-blueLight transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
