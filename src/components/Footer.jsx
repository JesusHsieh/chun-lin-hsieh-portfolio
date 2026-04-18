export default function Footer() {
  return (
    <footer className="border-t border-slate-100 px-6 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center text-[10px] tracking-[0.2em] text-slate-400 uppercase">
        <p>© {new Date().getFullYear()} CHUN-LIN HSIEH. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
