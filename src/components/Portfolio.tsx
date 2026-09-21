import { useState } from 'react';
import { Code2, Palette, Plus, X, ExternalLink, Image as ImageIcon, Link2 } from 'lucide-react';
import { webProjects, designProjects, type Project, type ProjectCategory } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

type Tab = 'web' | 'design';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('web');
  const [webList, setWebList] = useState<Project[]>(webProjects);
  const [designList, setDesignList] = useState<Project[]>(designProjects);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useReveal();

  const projects = activeTab === 'web' ? webList : designList;

  const addProject = (project: Project) => {
    if (project.category === 'web') setWebList((prev) => [...prev, project]);
    else setDesignList((prev) => [...prev, project]);
  };

  return (
    <section id="portfolio" className="scroll-mt-20 pt-12 pb-20 bg-slate-50 dark:bg-slate-navy relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-navy dark:text-white leading-tight">
            Dual showcase of{' '}
            <span className="text-gradient-blue">code &amp; craft.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Engineering projects and brand design work — switch tabs to explore each discipline.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-navy2 border border-slate-200 dark:border-slate-700/50">
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                activeTab === 'web'
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-navy dark:hover:text-white'
              }`}
            >
              <Code2 size={18} />
              Web Engineering
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                activeTab === 'design'
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-navy dark:hover:text-white'
              }`}
            >
              <Palette size={18} />
              Brand &amp; Visual Design
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} tab={activeTab} />
          ))}

          {/* Add new project card */}
          <button
            onClick={() => setModalOpen(true)}
            className="group flex flex-col items-center justify-center gap-3 p-10 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-brand-blue dark:hover:border-brand-blue text-slate-400 dark:text-slate-500 hover:text-brand-blue dark:hover:text-brand-blueLight transition-all min-h-[280px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all">
              <Plus size={28} />
            </div>
            <span className="text-base font-semibold">Add New Project</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">Click to add a {activeTab === 'web' ? 'web' : 'design'} project</span>
          </button>
        </div>
      </div>

      {modalOpen && (
        <AddProjectModal
          defaultCategory={activeTab}
          onClose={() => setModalOpen(false)}
          onAdd={(project) => {
            addProject(project);
            setModalOpen(false);
            setActiveTab(project.category);
          }}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, index, tab }: { project: Project; index: number; tab: Tab }) {
  const overlayLabel = tab === 'web' ? 'Click to view live project ↗' : 'Click to view live brand ↗';
  const hasLink = Boolean(project.link || project.detailsLink);
  const linkHref = project.link || project.detailsLink || '#';

  return (
    <div
      className="group relative rounded-2xl bg-white dark:bg-slate-navy2 border border-slate-200 dark:border-slate-700/50 card-hover hover:border-brand-blue/40 dark:hover:border-brand-blue/40 overflow-hidden animate-fade-in-up flex flex-col"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
    >
      {/* Visual header with hover overlay */}
      <div className="relative group overflow-hidden rounded-xl cursor-pointer">
        <div className={`h-48 relative overflow-hidden ${
          tab === 'web'
            ? 'bg-gradient-to-br from-brand-blue/10 via-brand-blue/5 to-slate-100 dark:from-brand-blue/20 dark:via-brand-blue/5 dark:to-slate-navy'
            : 'bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-slate-100 dark:from-brand-green/20 dark:via-brand-green/5 dark:to-slate-navy'
        }`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-30" />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            {tab === 'web' ? (
              <Code2 size={56} className="text-brand-blue/40 group-hover:text-brand-blue/60 group-hover:scale-110 transition-all" />
            ) : (
              <Palette size={56} className="text-brand-green/40 group-hover:text-brand-green/60 group-hover:scale-110 transition-all" />
            )}
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-brand-blue bg-white/80 dark:bg-slate-navy/80 backdrop-blur rounded-full">
            {tab === 'web' ? 'Web' : 'Design'}
          </div>

          {/* Hover overlay */}
          {hasLink && (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <span className="px-4 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm">
                {overlayLabel}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-display font-semibold text-slate-navy dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-brand-blueLight transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blueDark rounded-lg transition-colors"
            >
              <ExternalLink size={15} />
              {tab === 'web' ? 'Live Demo' : 'View Live Brand'}
            </a>
          )}
          {project.detailsLink && (
            <a
              href={project.detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-brand-blue hover:text-brand-blueDark dark:hover:text-brand-blueLight bg-brand-blue/10 hover:bg-brand-blue/20 rounded-lg transition-colors"
            >
              <ImageIcon size={15} />
              View Gallery
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function AddProjectModal({
  defaultCategory,
  onClose,
  onAdd,
}: {
  defaultCategory: Tab;
  onClose: () => void;
  onAdd: (project: Project) => void;
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>(defaultCategory);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      id: `${Date.now()}`,
      title: title.trim(),
      category,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      description: description.trim() || 'No description provided.',
      image: image.trim() || undefined,
      link: link.trim() || undefined,
    });
  };

  const inputClass = 'w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-navy border border-slate-200 dark:border-slate-700 text-sm text-slate-navy dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-navy/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-navy2 border border-slate-200 dark:border-slate-700/50 shadow-2xl animate-fade-in-up">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700/50">
          <h3 className="text-lg font-display font-semibold text-slate-navy dark:text-white">Add New Project</h3>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} placeholder="My Awesome Project" required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Category</label>
            <div className="flex gap-2">
              {(['web', 'design'] as ProjectCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    category === cat
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                      : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat === 'web' ? 'Web Engineering' : 'Brand & Design'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className={inputClass} placeholder="Brief description of the project..." />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Image URL</label>
            <input value={image} onChange={(e) => setImage(e.target.value)} className={inputClass} placeholder="/images/my-project.png or https://..." />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Tech Tags (comma-separated)</label>
            <input value={tags} onChange={(e) => setTags(e.target.value)} className={inputClass} placeholder="HTML/CSS, JavaScript, React" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Link</label>
            <input value={link} onChange={(e) => setLink(e.target.value)} className={inputClass} placeholder="https://my-project.com" />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors">
              Cancel
            </button>
            <button type="submit" className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blueDark rounded-xl transition-colors shadow-lg shadow-brand-blue/30">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
