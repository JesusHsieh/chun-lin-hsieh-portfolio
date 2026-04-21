import { useEffect, useMemo, useState } from 'react';

function buildSlides(project) {
  const customSlides = project.heroImages?.filter(Boolean).slice(0, 3);
  const defaultHeroPosition = project.heroImagePosition ?? 'center center';

  if (customSlides?.length) {
    return customSlides.map((src, index) => ({
      src,
      label: `Scene ${String(index + 1).padStart(2, '0')}`,
      backgroundPosition: project.heroImagePositions?.[index] ?? defaultHeroPosition,
    }));
  }

  return [
    {
      src: project.coverImage,
      label: 'Scene 01',
      backgroundPosition: 'left center',
    },
    {
      src: project.coverImage,
      label: 'Scene 02',
      backgroundPosition: 'center center',
    },
    {
      src: project.coverImage,
      label: 'Scene 03',
      backgroundPosition: 'right center',
    },
  ];
}

export default function ProjectHero3D({ project }) {
  const slides = useMemo(() => buildSlides(project), [project]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="project-hero-3d mb-12">
      <div className="project-hero-3d__stage">
        <div className="project-hero-3d__ambient" />
        <div className="project-hero-3d__grid" />
        <div className="project-hero-3d__ring" />

        <div className="project-hero-3d__slider">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === (activeIndex - 1 + slides.length) % slides.length;
            const stateClass = isActive
              ? 'project-hero-3d__panel--active'
              : isPrevious
                ? 'project-hero-3d__panel--previous'
                : 'project-hero-3d__panel--next';

            return (
              <div
                key={`${project.id}-${slide.label}-${index}`}
                className={`project-hero-3d__panel project-hero-3d__panel--main ${stateClass}`}
                style={{
                  backgroundImage: `url(${slide.src})`,
                  backgroundPosition: slide.backgroundPosition,
                }}
                aria-hidden={!isActive}
              />
            );
          })}
        </div>

        <div className="project-hero-3d__pagination" aria-label="slide pagination">
          {slides.map((slide, index) => (
            <span
              key={`${slide.label}-dot`}
              className={`project-hero-3d__dot ${
                index === activeIndex ? 'project-hero-3d__dot--active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
