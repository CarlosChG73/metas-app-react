function Footer() {
  return (
    <footer className="border-t border-amber-500/60 bg-gradient-to-r from-slate-950 via-red-900 to-amber-700 px-4 py-2 text-center text-white">
      {/* Derechos */}
      <p className="text-sm font-bold">
        © 2026 Carlos Chávez Dev. Todos los derechos reservados.
      </p>

      {/* Institución */}
      <small className="block text-xs text-amber-100">
        Estudiante en Academia X
      </small>
    </footer>
  );
}

export default Footer;