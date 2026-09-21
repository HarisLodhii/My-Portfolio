import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Competencies from '@/components/Competencies';
import Portfolio from '@/components/Portfolio';
import Metrics from '@/components/Metrics';
import Contact from '@/components/Contact';
import FutureDirection from '@/components/FutureDirection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-navy text-slate-navy dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competencies />
        <Portfolio />
        <Metrics />
        <FutureDirection />
        <Contact />
      </main>
    </div>
  );
}
