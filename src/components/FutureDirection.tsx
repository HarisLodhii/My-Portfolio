import { Cloud, GitBranch, Gauge, type LucideIcon } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface VisionCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: VisionCard[] = [
  {
    icon: Cloud,
    title: 'Cloud Architecture & Multi-Cloud Systems',
    description:
      'Currently exploring AWS, Google Cloud Platform (GCP), and Azure to bridge front-end user experiences with cloud infrastructure, serverless deployments, and distributed systems.',
  },
  {
    icon: GitBranch,
    title: 'Full-Stack Deployment Pipelines',
    description:
      'Mastering CI/CD pipelines, containerized deployments, and cloud hosting solutions (Netlify, AWS S3/CloudFront) for fast, secure web applications.',
  },
  {
    icon: Gauge,
    title: 'Scalable Web Performance',
    description:
      'Combining computer science principles with modern cloud services to optimize application load times, backend integration, and global CDN delivery.',
  },
];

export default function FutureDirection() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="vision" className="scroll-mt-20 pt-12 pb-20 bg-slate-50 dark:bg-slate-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[100px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            Future Direction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-navy dark:text-white leading-tight">
            Future Vision &amp;{' '}
            <span className="text-gradient-blue">Technical Direction</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Expanding Front-End Precision into Cloud Infrastructure &amp; Scalable Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative p-7 rounded-2xl bg-white dark:bg-slate-navy2 border border-slate-200 dark:border-slate-700/50 card-hover hover:border-brand-blue/40 dark:hover:border-brand-blue/40 overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 dark:from-brand-blue/20 dark:to-brand-green/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <card.icon size={28} className="text-brand-blue group-hover:text-brand-blueDark dark:group-hover:text-brand-blueLight transition-colors" />
              </div>

              <h3 className="text-lg font-display font-semibold text-slate-navy dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
