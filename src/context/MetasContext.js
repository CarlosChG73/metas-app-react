import { createContext, useContext, useEffect, useReducer } from 'react';
import { metasIniciales } from '../data/metasIniciales';
import { metasReducer } from '../reducers/metasReducer';

// Crear contexto
const MetasContext = createContext();

// Cargar metas guardadas
function obtenerMetasIniciales() {
  const metasGuardadas = localStorage.getItem('metas-app-react');

  if (metasGuardadas) {
    return JSON.parse(metasGuardadas);
  }

  return metasIniciales;
}

// Provider de metas
export function MetasProvider({ children }) {
  const [metas, dispatch] = useReducer(
    metasReducer,
    metasIniciales,
    obtenerMetasIniciales
  );

  // Guardar metas
  useEffect(() => {
    localStorage.setItem('metas-app-react', JSON.stringify(metas));
  }, [metas]);

  return (
    <MetasContext.Provider value={{ metas, dispatch }}>
      {children}
    </MetasContext.Provider>
  );
}

// Hook para usar metas
export function useMetas() {
  return useContext(MetasContext);
}