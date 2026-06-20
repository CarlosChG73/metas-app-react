function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-amber-500/60 bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 px-8 shadow-lg">
      {/* Marca */}
      <div className="flex items-center gap-4">
        <span className="text-4xl drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
          🔥
        </span>

        <h1 className="text-3xl font-bold tracking-[0.25em] text-white">
          METAS APP
        </h1>
      </div>

      {/* Usuario */}
      <div className="grid h-12 w-12 place-items-center rounded-full border border-sky-400/70 bg-sky-400/10 shadow-[0_0_18px_rgba(56,189,248,0.55)]">
        <span className="text-2xl">👤</span>
      </div>
    </header>
  );
}

export default Header;