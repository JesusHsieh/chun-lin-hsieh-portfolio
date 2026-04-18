import { useState } from 'react';

export default function AboutSection() {
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <button
          type="button"
          onMouseEnter={() => setIsPhotoActive(true)}
          onMouseLeave={() => setIsPhotoActive(false)}
          onBlur={() => setIsPhotoActive(false)}
          onClick={() => setIsPhotoActive((previous) => !previous)}
          className={`aspect-[3/4] overflow-hidden rounded-lg bg-slate-200 shadow-xl transition-all duration-500 ${
            isPhotoActive ? 'grayscale-0' : 'grayscale'
          }`}
          aria-pressed={isPhotoActive}
        >
          <img
            src="/images/profile/profile-about.png"
            alt="謝君臨個人形象照"
            className="h-full w-full object-cover"
          />
        </button>

        <div>
          <h3 className="mb-6 text-3xl font-bold text-green-900">景觀的本質與初衷</h3>
          <p className="mb-6 leading-relaxed text-slate-600">
            我是謝君臨（CHUN-LIN HSIEH），擁有逾 11 年景觀建築專業資歷。職涯中始終以前瞻性生態思維結合精緻工程細部為核心設計語言，主導大型公共空間、商業總部及永續社區的整體規劃，並透過數位建模與數據分析系統性優化環境效能。
          </p>
          <p className="mb-8 leading-relaxed text-slate-600">
            我深信景觀不是建築的附屬，而是城市呼吸的肺部、居民情感的寄託。每一個設計決策，都是為土地與人之間建立長遠對話的起點。
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-green-50 p-4 transition-transform hover:-translate-y-1">
              <div className="text-2xl font-bold text-green-800">11+</div>
              <div className="text-xs uppercase tracking-tighter text-green-700">業界年資</div>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 transition-transform hover:-translate-y-1">
              <div className="text-2xl font-bold text-slate-800">30+</div>
              <div className="text-xs uppercase tracking-tighter text-slate-500">完成專案</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
