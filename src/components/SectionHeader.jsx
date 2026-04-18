export default function SectionHeader({ title, subtitle }) {
  return (
    <header className="mb-16 mt-12 space-y-4">
      <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">{title}</h2>
      <p className="text-lg font-medium tracking-wider text-green-800 md:text-2xl">{subtitle}</p>
    </header>
  );
}
