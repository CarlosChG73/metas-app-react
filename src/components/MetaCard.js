import { useState } from 'react';
import { useMetas } from '../context/MetasContext';
import { ACCIONES_METAS } from '../reducers/metasReducer';
import MetaModal from './MetaModal';

function MetaCard({ meta }) {
  // Estado global
  const { dispatch } = useMetas();

  // Estado del modal
  const [modalAbierto, setModalAbierto] = useState(false);

  // Calcular porcentaje de avance
  const porcentaje = (meta.completado / meta.meta) * 100;

  // Completar meta
  function completarMeta(evento) {
    evento.stopPropagation();

    dispatch({
      type: ACCIONES_METAS.COMPLETAR,
      payload: meta.id,
    });
  }

  // Abrir modal
  function abrirModal() {
    setModalAbierto(true);
  }

  // Cerrar modal
  function cerrarModal() {
    setModalAbierto(false);
  }

  return (
    <>
      <article
        className="grid min-h-24 cursor-pointer grid-cols-[70px_110px_1fr_180px_160px] items-center gap-5 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-slate-50 to-slate-200 px-5 py-4 text-slate-950 shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] max-lg:grid-cols-[60px_90px_1fr] max-lg:grid-rows-2 max-md:grid-cols-[56px_1fr] max-md:gap-3"
        onClick={abrirModal}
      >
        {/* Icono */}
        <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-sky-300 bg-slate-100 text-2xl shadow-[0_0_14px_rgba(56,189,248,0.35)]">
          {meta.icono}
        </div>

        {/* Frecuencia */}
        <div className="flex items-baseline gap-1 font-bold max-md:col-span-2 max-md:justify-center">
          <strong className="text-4xl text-red-800">
            {meta.eventos}
          </strong>
          <span className="text-blue-900">/ {meta.periodo}</span>
        </div>

        {/* Descripción */}
        <div>
          <p className="font-bold">
            {meta.detalles}
          </p>

          <small className="text-slate-600">
            Fecha límite: {meta.fechaLimite}
          </small>
        </div>

        {/* Progreso */}
        <div className="flex flex-col gap-2 font-bold max-md:col-span-2">
          <span>
            {meta.completado} de {meta.meta}
          </span>

          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-400 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-red-600 shadow-[0_0_10px_rgba(56,189,248,0.65)]"
              style={{ width: `${porcentaje}%` }}
            ></div>
          </div>
        </div>

        {/* Botón */}
        <button
          className="rounded-full bg-gradient-to-br from-slate-50 to-slate-300 px-6 py-4 font-bold text-slate-950 shadow-lg hover:from-white hover:to-amber-300 max-md:col-span-2"
          onClick={completarMeta}
        >
          Completado
        </button>
      </article>

      {/* Modal */}
      {modalAbierto && (
        <MetaModal meta={meta} cerrarModal={cerrarModal} />
      )}
    </>
  );
}

export default MetaCard;