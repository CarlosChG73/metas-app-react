// Acciones del reducer
export const ACCIONES_METAS = {
  COMPLETAR: 'COMPLETAR',
  CREAR: 'CREAR',
  ACTUALIZAR: 'ACTUALIZAR',
  BORRAR: 'BORRAR',
};

// Reducer de metas
export function metasReducer(metas, accion) {
  switch (accion.type) {
    case ACCIONES_METAS.COMPLETAR:
      return metas.map((meta) => {
        if (meta.id === accion.payload && meta.completado < meta.meta) {
          return {
            ...meta,
            completado: meta.completado + 1,
          };
        }

        return meta;
      });

    case ACCIONES_METAS.CREAR:
      return [...metas, accion.payload];

    case ACCIONES_METAS.ACTUALIZAR:
      return metas.map((meta) => {
        if (meta.id === accion.payload.id) {
          return accion.payload;
        }

        return meta;
      });

    case ACCIONES_METAS.BORRAR:
      return metas.filter((meta) => meta.id !== accion.payload);

    default:
      return metas;
  }
}