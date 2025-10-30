import Gen from './Gen';

function Generations() {
  return (
    <section className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Generations</h2>
      <div className="grid grid-cols-2 gap-4">
        <Gen text="Gen 1" />
        <Gen text="Gen 2" />
        <Gen text="Gen 3" />
        <Gen text="Gen 4" />
      </div>
    </section>
  );
}

export default Generations;