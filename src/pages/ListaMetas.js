import MetaCard from '../components/MetaCard';
import { useMetas } from '../context/MetasContext';

function ListaMetas() {
  // Estado global
  const { metas } = useMetas();

  return (
    <section>
      {/* Título de página */}
      <h2 className="mb-6 text-2xl font-bold text-white">
        Lista de Metas
      </h2>

      {/* Lista de metas */}
      <div className="flex flex-col gap-6">
        {metas.map((meta) => (
          <MetaCard key={meta.id} meta={meta} />
        ))}
      </div>
    </section>
  );
}

export default ListaMetas;