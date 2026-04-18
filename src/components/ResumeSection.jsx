import { Briefcase, GraduationCap, Leaf } from 'lucide-react';
import { EXPERIENCE, SKILLS } from '../data/siteData.js';

export default function ResumeSection() {
  return (
    <div className="mx-auto max-w-5xl py-12">
      <div className="grid gap-16 md:grid-cols-3">
        <div className="space-y-12 md:col-span-1">
          <section>
            <div className="mb-6 flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-green-800" />
              <h4 className="text-sm font-bold tracking-widest uppercase">教育背景</h4>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800">景觀設計學士</p>
                <p className="text-sm text-slate-500">輔仁大學 | 2004 - 2008</p>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-6 flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-green-800" />
              <h4 className="text-sm font-bold tracking-widest uppercase">專業技能</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] tracking-tighter text-slate-600 uppercase transition-colors hover:border-green-800 hover:text-green-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-2">
          <div className="mb-8 flex items-center space-x-2">
            <Briefcase className="h-5 w-5 text-green-800" />
            <h4 className="text-sm font-bold tracking-widest uppercase">工作經歷</h4>
          </div>

          <div className="relative ml-3 space-y-12 border-l border-slate-200 pl-8">
            {EXPERIENCE.map((item) => (
              <div key={`${item.company}-${item.period}`} className="group relative">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-green-800 transition-transform duration-300 group-hover:scale-125" />
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h5 className="text-xl font-bold text-slate-900">{item.role}</h5>
                  <span className="mt-1 text-xs font-medium tracking-widest text-slate-400 uppercase sm:mt-0">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-green-800">{item.company}</p>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
