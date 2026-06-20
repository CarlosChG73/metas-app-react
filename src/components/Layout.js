import { Outlet } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Header */}
      <Header />

      {/* Layout principal */}
      <div className="grid flex-1 grid-cols-[280px_1fr] bg-slate-900 max-md:grid-cols-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(159,29,32,0.35),transparent_32%),linear-gradient(135deg,#101827,#1f2937)] p-10 max-md:p-5">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;