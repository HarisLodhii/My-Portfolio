import { Mail, Github, Linkedin, MessageCircle, ArrowRight, FiverrIcon } from '@/components/icons';
import { socialLinks } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

interface ContactItem {
  icon: ComponentType<LucideProps>;
  label: string;
  value: string;
  href: string;
}

const contacts: ContactItem[] = [
  { icon: Mail, label: 'Email', value: 'harisanwarlodhi@gmail.com', href: socialLinks.email },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 308 8932260', href: socialLinks.whatsapp },
  { icon: Github, label: 'GitHub', value: 'HarisLodhii', href: socialLinks.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'harisanwarlodhi', href: socialLinks.linkedin },
  { icon: FiverrIcon, label: 'Fiverr', value: 'harisanwarlodhi', href: socialLinks.fiverr },
];

export default function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="scroll-mt-20 pt-12 pb-20 bg-slate-50 dark:bg-slate-navy relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 dark:bg-brand-green/15 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-5xl mx-auto px-5 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-slate-navy dark:text-white leading-tight">
            Let's Build Something{' '}
            <span className="text-gradient-blue">Great Together.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Whether you need a conversion-focused website, a brand identity, or both — I'm ready to help.
            Reach out on whichever platform works best for you.
          </p>
        </div>

        {/* WhatsApp CTA banner */}
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 mb-10 rounded-2xl bg-gradient-to-r from-brand-green/10 to-brand-green/5 dark:from-brand-green/15 dark:to-brand-green/5 border border-brand-green/30 hover:border-brand-green/50 transition-all hover:shadow-xl hover:shadow-brand-green/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-slate-navy dark:text-white">
                Fastest response? Chat on WhatsApp.
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Usually replies within a few hours.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-green hover:bg-brand-greenDark rounded-xl transition-colors whitespace-nowrap">
            Start a Chat
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => {
            const isFiverr = contact.label === 'Fiverr';
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-navy2 border border-slate-200 dark:border-slate-700/50 card-hover hover:border-brand-blue/40 dark:hover:border-brand-blue/40"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                  isFiverr
                    ? 'bg-slate-100 dark:bg-slate-700/50 group-hover:bg-transparent'
                    : 'bg-slate-100 dark:bg-slate-700/50 group-hover:bg-brand-blue'
                }`}>
                  <contact.icon size={isFiverr ? 24 : 20} className={isFiverr ? '' : 'text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors'} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {contact.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-navy dark:text-white truncate group-hover:text-brand-blue dark:group-hover:text-brand-blueLight transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative max-w-7xl mx-auto px-5 sm:px-8 mt-16 pt-12 border-t border-slate-200 dark:border-slate-700/50">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-navy dark:text-white leading-tight">
            Open for Full-Time Roles, Freelance &amp; Business Consulting
          </h3>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Whether you are looking to hire for Web Development, Sales &amp; Growth, Brand Design, or Marketing — let's connect and discuss how I can add value to your team or business.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blueDark rounded-xl transition-colors shadow-lg shadow-brand-blue/30"
            >
              <Mail size={18} />
              Hire Me
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-green dark:text-brand-greenLight bg-brand-green/10 hover:bg-brand-green/20 dark:bg-brand-green/15 dark:hover:bg-brand-green/25 rounded-xl transition-colors border border-brand-green/30 hover:border-brand-green/50"
            >
              <MessageCircle size={18} />
              Quick Chat
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200/60 dark:border-slate-700/40">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
            &copy; 2026 Haris Anwar Lodhi. Bridging technical engineering with real-world business strategy.
          </p>
          <div className="flex items-center gap-3">
            {contacts.map((c) => {
              const isFiverr = c.label === 'Fiverr';
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
                >
                  <c.icon size={isFiverr ? 22 : 18} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </section>
  );
}
