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
            src="/images/profile/my.png"
            alt="謝君臨個人照片"
            className="h-full w-full object-cover"
          />
        </button>

        <div>
          <h3 className="mb-6 text-3xl font-bold text-green-900">
            景觀的本質，在於理性的跨域轉譯，與感性的土地觀察。
          </h3>

          <p className="mb-6 leading-relaxed text-slate-600">
            我是謝君臨（CHUN-LIN HSIEH），擁有逾 13 年景觀與建築專業資歷。職涯中始終以
            前瞻性生態思維結合精緻工程細部為核心設計語言，結合景觀、建築、室內設計與廣告行銷的多元背景，
            參與主導大型公共空間、商業總部及永續社區的整體規劃；在實務層面，我能精準「導航」複雜的都市計畫法規與審議流程，
            將抽象的設計願景轉化為高落地性的空間方案，並透過數位建模與數據分析，系統性地優化環境效能。
          </p>

          <p className="mb-6 leading-relaxed text-slate-600">
            我深信景觀不應只是建築的附屬，而是城市呼吸的肺部、居民情感的寄託。每一個設計決策，
            都是為了在土地與人之間建立長遠對話的起點。
          </p>

          <p className="mb-8 leading-relaxed text-slate-600">
            目前構思「設計 × 數據 × 系統思維」的融合。透過 AI 輔助設計、GIS 環境分析與微氣候數據的應用，
            探索淨零碳與永續發展的景觀新標準，為未來都市提供具備科學實證的生態解決方案。
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-green-50 p-4 transition-transform hover:-translate-y-1">
              <div className="text-2xl font-bold text-green-800">13+</div>
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
