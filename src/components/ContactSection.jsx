import { CheckCircle2, Mail, Users } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData.js';

export default function ContactSection({
  formData,
  showSuccess,
  onInputChange,
  onSubmit,
}) {
  return (
    <div className="relative mx-auto max-w-2xl py-20 text-center">
      {showSuccess && (
        <div className="fixed left-1/2 top-28 z-[100] flex -translate-x-1/2 items-center space-x-3 rounded-full bg-green-900 px-8 py-4 text-white shadow-2xl">
          <CheckCircle2 className="h-5 w-5 text-green-400" />
          <span className="text-sm font-bold tracking-widest">訊息已準備就緒，正在開啟郵件軟體...</span>
        </div>
      )}

      <h2 className="mb-4 text-4xl font-bold text-green-900">期待與您的聯繫</h2>
      <p className="mb-12 text-slate-500">
        無論是大型開發案、都市更新計畫，或精緻私人場域，期待有機會與您交流，並共同探索更具環境價值的空間提案。
      </p>

      <div className="mb-12 grid gap-6 text-left md:grid-cols-2">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="group block rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-green-800 hover:shadow-md"
        >
          <Mail className="mb-4 h-6 w-6 text-green-800 transition-transform group-hover:scale-110" />
          <h4 className="mb-1 font-bold">電子郵件</h4>
          <p className="text-sm text-slate-500">{CONTACT_INFO.displayEmail}</p>
        </a>

        <a
          href={CONTACT_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-green-800 hover:shadow-md"
        >
          <Users className="mb-4 h-6 w-6 text-green-800 transition-transform group-hover:scale-110" />
          <h4 className="mb-1 font-bold">社群連結</h4>
          <p className="text-sm text-slate-500">LinkedIn</p>
        </a>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 text-left">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            placeholder="您的姓名"
            className="w-full rounded-lg border border-transparent bg-slate-50 p-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-green-800"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            required
            placeholder="電子郵件"
            className="w-full rounded-lg border border-transparent bg-slate-50 p-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-green-800"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={onInputChange}
          required
          placeholder="您的訊息"
          rows="4"
          className="w-full resize-none rounded-lg border border-transparent bg-slate-50 p-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-green-800"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-green-900 py-5 font-bold tracking-widest text-white uppercase shadow-lg transition-all hover:bg-green-800 active:scale-[0.98]"
        >
          <span>發送訊息</span>
          <Mail className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
