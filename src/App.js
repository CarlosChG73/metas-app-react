import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import ListaMetas from './pages/ListaMetas';
import NuevaMeta from './pages/NuevaMeta';

function App() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route path="/" element={<Layout />}>
        {/* Ruta inicial */}
        <Route index element={<Navigate to="/lista" replace />} />

        {/* Páginas */}
        <Route path="lista" element={<ListaMetas />} />
        <Route path="nueva" element={<NuevaMeta />} />
      </Route>
    </Routes>
  );
}

export default App;
