import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteData.js';

const HERO_TITLES = [
  'URBAN DESIGNER',
  'LANDSCAPE ARCHITECT',
  'PROJECT MANAGER',
  'SPACE MAKER',
];

export default function Navigation({
  activeTab,
  isMenuOpen,
  scrolled,
  onSelectTab,
  onToggleMenu,
  onCloseMenu,
}) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % HERO_TITLES.length);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, []);

  const animatedTitle = HERO_TITLES[titleIndex];

  return (
    <>
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/90 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-[-0.06em] text-slate-900 uppercase md:text-[1.65rem]">
              CHUN-LIN HSIEH
            </h1>
            <span
              className="nav-hero-title mt-1 text-[12px] font-medium tracking-[0.18em] text-slate-500 md:text-[13px]"
              aria-label={animatedTitle}
            >
              {animatedTitle.split('').map((character, index) => (
                <span
                  key={`${animatedTitle}-${index}`}
                  className="nav-hero-title__char"
                  style={{ animationDelay: `${index * 42}ms` }}
                >
                  {character === ' ' ? '\u00A0' : character}
                </span>
              ))}
            </span>
          </div>

          <div className="hidden space-x-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-green-700 ${
                  activeTab === item.id
                    ? 'border-b-2 border-green-800 font-bold text-green-800'
                    : 'text-slate-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button type="button" className="p-2 md:hidden" onClick={onToggleMenu} aria-label="切換選單">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-white">
          <button
            type="button"
            className="absolute right-6 top-6 p-2 text-slate-500 transition-colors hover:text-slate-900"
            onClick={onCloseMenu}
            aria-label="關閉選單"
          >
            <X size={32} />
          </button>

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className="text-2xl font-light tracking-widest uppercase transition-colors hover:text-green-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
