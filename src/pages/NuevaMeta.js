import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMetas } from '../context/MetasContext';
import { ACCIONES_METAS } from '../reducers/metasReducer';

// Estado inicial del formulario
const formularioInicial = {
  detalles: '',
  eventos: '',
  periodo: 'semana',
  meta: '',
  completado: '',
  fechaLimite: '',
  icono: '🎯',
};

function NuevaMeta() {
  // Navegación
  const navigate = useNavigate();

  // Estado global
  const { dispatch } = useMetas();

  // Estado del formulario
  const [formulario, setFormulario] = useState(formularioInicial);

  // Actualizar formulario
  function actualizarFormulario(evento) {
    const { name, value } = evento.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  }

  // Crear meta
  function crearMeta(evento) {
    evento.preventDefault();

    const nuevaMeta = {
      id: Date.now(),
      icono: formulario.icono,
      eventos: Number(formulario.eventos),
      periodo: formulario.periodo,
      detalles: formulario.detalles,
      completado: Number(formulario.completado),
      meta: Number(formulario.meta),
      fechaLimite: formulario.fechaLimite,
    };

    dispatch({
      type: ACCIONES_METAS.CREAR,
      payload: nuevaMeta,
    });

    setFormulario(formularioInicial);
    navigate('/lista');
  }

  return (
    <section className="flex justify-center">
      {/* Formulario */}
      <form
        className="w-full max-w-3xl rounded-3xl border border-amber-500/40 bg-gradient-to-br from-slate-50 to-slate-200 p-8 text-slate-950 shadow-2xl"
        onSubmit={crearMeta}
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-red-800">
          Nueva Meta
        </h2>

        {/* Campo descripción */}
        <label className="mb-5 flex flex-col gap-2 font-bold">
          Describe tu meta
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
            type="text"
            name="detalles"
            value={formulario.detalles}
            onChange={actualizarFormulario}
            placeholder="Ej. Estudiar React con ejercicios"
            required
          />
        </label>

        {/* Campo frecuencia */}
        <label className="mb-5 flex flex-col gap-2 font-bold">
          ¿Con qué frecuencia deseas cumplir esta meta?
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <input
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
              type="number"
              name="eventos"
              value={formulario.eventos}
              onChange={actualizarFormulario}
              placeholder="Cantidad"
              min="1"
              required
            />

            <select
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
              name="periodo"
              value={formulario.periodo}
              onChange={actualizarFormulario}
            >
              <option value="día">Día</option>
              <option value="semana">Semana</option>
              <option value="mes">Mes</option>
              <option value="año">Año</option>
            </select>
          </div>
        </label>

        {/* Campo objetivo */}
        <label className="mb-5 flex flex-col gap-2 font-bold">
          ¿Cuántas veces deseas completar esta meta?
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
            type="number"
            name="meta"
            value={formulario.meta}
            onChange={actualizarFormulario}
            placeholder="Ej. 60"
            min="1"
            required
          />
        </label>

        {/* Campo avance actual */}
        <label className="mb-5 flex flex-col gap-2 font-bold">
          ¿Cuántas veces has completado ya esta meta?
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
            type="number"
            name="completado"
            value={formulario.completado}
            onChange={actualizarFormulario}
            placeholder="Ej. 0"
            min="0"
            required
          />
        </label>

        {/* Campo fecha límite */}
        <label className="mb-5 flex flex-col gap-2 font-bold">
          ¿Tienes una fecha límite?
          <input
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
            type="date"
            name="fechaLimite"
            value={formulario.fechaLimite}
            onChange={actualizarFormulario}
            required
          />
        </label>

        {/* Campo icono */}
        <label className="mb-5 flex flex-col gap-2 font-bold">
          Escoge un icono para la meta
          <select
            className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
            name="icono"
            value={formulario.icono}
            onChange={actualizarFormulario}
          >
            <option value="💪">💪 Entrenamiento</option>
            <option value="💻">💻 Estudio</option>
            <option value="🚀">🚀 Portafolio</option>
            <option value="📚">📚 Lectura</option>
            <option value="🎯">🎯 Objetivo</option>
            <option value="🗂️">🗂️ Organización</option>
          </select>
        </label>

        {/* Botones */}
        <div className="mt-8 flex justify-center gap-4 max-sm:flex-col">
          <button
            className="rounded-full bg-gradient-to-br from-red-800 to-amber-500 px-8 py-4 font-bold text-white shadow-lg hover:from-red-700 hover:to-amber-400"
            type="submit"
          >
            Crear
          </button>

          <button
            className="rounded-full bg-gradient-to-br from-slate-50 to-slate-300 px-8 py-4 font-bold text-slate-950 shadow-lg hover:from-white hover:to-slate-200"
            type="button"
            onClick={() => navigate('/lista')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default NuevaMeta;