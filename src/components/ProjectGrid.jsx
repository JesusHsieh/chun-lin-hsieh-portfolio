import { Calculator, Code, Database } from 'lucide-react';

const ICON_MAP = {
  calculator: Calculator,
  database: Database,
  code: Code,
};

export default function ProjectGrid({
  items,
  onSelect,
  buttonLabel,
  showIcons = false,
}) {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-7 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
      {items.map((item) => {
        const Icon = showIcons ? ICON_MAP[item.icon] : null;

        return (
          <div key={item.id} className="self-start">
            <button
              type="button"
              className="group block w-full appearance-none border-0 bg-transparent p-0 text-left"
              onClick={() => onSelect(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col items-center space-y-4">
                    {Icon ? <Icon className="h-8 w-8 text-white" /> : null}
                    <span className="bg-white px-6 py-2 text-sm font-medium tracking-widest text-slate-900 uppercase transition-transform hover:scale-105">
                      {buttonLabel}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-1 text-[11px] font-bold tracking-widest text-green-800 uppercase">
                  {item.category}
                </p>
                <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
                <p className="line-clamp-2 mt-1 text-sm text-slate-500">{item.description}</p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
