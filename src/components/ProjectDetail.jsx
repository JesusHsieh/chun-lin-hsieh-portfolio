import { ArrowLeft, Calculator, Code, Database, Leaf } from 'lucide-react';
import ProjectHero3D from './ProjectHero3D.jsx';

const ICON_MAP = {
  calculator: Calculator,
  database: Database,
  code: Code,
};

function DetailHighlights({ title, items, icon: IconComponent }) {
  return (
    <div className="sticky top-32 rounded-xl border border-slate-100 bg-slate-50 p-8">
      <IconComponent className="mb-6 h-8 w-8 text-green-800" />
      <h4 className="mb-4 font-bold text-slate-900">{title}</h4>
      <ul className="space-y-4 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex items-start space-x-3">
            <div className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-800" />
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetail({
  project,
  backLabel,
  onBack,
  contentTitle,
  metadataLabels,
  highlights,
  highlightsTitle,
  variant = 'portfolio',
}) {
  const SideIcon = variant === 'personal' ? ICON_MAP[project.icon] ?? Code : Leaf;

  return (
    <div className="mx-auto mt-4 max-w-5xl md:mt-8">
      <button
        type="button"
        onClick={onBack}
        className="group mb-10 flex items-center space-x-2 text-slate-500 transition-colors hover:text-green-800"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-bold tracking-widest uppercase">{backLabel}</span>
      </button>

      <div className="mb-10 md:mb-12">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
          {project.title}
        </h2>
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium tracking-widest text-slate-500 uppercase md:gap-6 md:text-sm">
          <span className="rounded-full bg-green-50 px-3 py-1.5 text-green-800">{project.category}</span>
          {metadataLabels.year ? <span>{metadataLabels.year}{project.year}</span> : null}
          {project.client && metadataLabels.client ? <span>{metadataLabels.client}{project.client}</span> : null}
          {project.area && metadataLabels.area ? <span>{metadataLabels.area}{project.area}</span> : null}
        </div>
      </div>

      {variant === 'portfolio' ? (
        <ProjectHero3D project={project} />
      ) : (
        <div className="group relative mb-12 aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 shadow-lg md:aspect-[21/9]">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">{contentTitle}</h3>
          {(project.details ?? [project.description]).map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}

          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg bg-green-900 px-5 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-green-800"
            >
              查看線上專案
            </a>
          ) : null}
        </div>

        <div className="md:col-span-1">
          <DetailHighlights title={highlightsTitle} items={highlights} icon={SideIcon} />
        </div>
      </div>
    </div>
  );
}
