import { GraduationCap, Briefcase, ShoppingBag, TrendingUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Computer Science Background',
    description: 'Final-year CS student graduating in 2027, combining academic rigor with practical development skills.',
  },
  {
    icon: Briefcase,
    title: 'IT & Digital Marketing',
    description: 'Hands-on experience managing IT operations and executing digital marketing strategies for real businesses.',
  },
  {
    icon: ShoppingBag,
    title: 'High-Volume Direct Sales',
    description: '1,500+ direct customer interactions — sharpening communication, negotiation, and conversion skills.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion-Focused Mindset',
    description: 'Every interface decision is driven by user experience and measurable business impact.',
  },
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="scroll-mt-20 pt-12 pb-20 bg-slate-50 dark:bg-slate-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-navy dark:text-white leading-tight">
              Where engineering meets{' '}
              <span className="text-gradient-blue">business strategy.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm Haris Anwar Lodhi — a front-end developer and digital brand strategist who bridges the gap
              between clean, intuitive interfaces and real-world business outcomes. My Computer Science
              background gives me the technical foundation, while managing IT, digital marketing, and
              high-volume direct sales gives me the commercial instincts to build things that actually convert.
            </p>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-500 leading-relaxed">
              Whether it's a logistics landing page optimized for WhatsApp conversions or a full event brand
              identity driving thousands of impressions, I approach every project with the same principle:
              design for the user, optimize for the business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-navy2 border border-slate-200 dark:border-slate-700/50 card-hover hover:border-brand-blue/30 dark:hover:border-brand-blue/40"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                  <item.icon size={24} className="text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-display font-semibold text-slate-navy dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
