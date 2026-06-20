import { NavLink } from 'react-router';

function Sidebar() {
  return (
    <aside className="border-r border-amber-500/40 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Navegación */}
      <nav className="flex flex-col py-6">
        <NavLink
          to="/lista"
          className={({ isActive }) =>
            isActive
              ? 'border-l-4 border-amber-400 bg-gradient-to-r from-red-900/80 to-amber-500/20 px-8 py-5 text-lg font-bold text-white'
              : 'border-l-4 border-transparent px-8 py-5 text-lg font-bold text-white hover:border-sky-400 hover:bg-sky-400/10'
          }
        >
          📋 Lista de Metas
        </NavLink>

        <NavLink
          to="/nueva"
          className={({ isActive }) =>
            isActive
              ? 'border-l-4 border-amber-400 bg-gradient-to-r from-red-900/80 to-amber-500/20 px-8 py-5 text-lg font-bold text-white'
              : 'border-l-4 border-transparent px-8 py-5 text-lg font-bold text-white hover:border-sky-400 hover:bg-sky-400/10'
          }
        >
          ➕ Nueva Meta
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;