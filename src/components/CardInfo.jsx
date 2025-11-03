// Rumagit, Pranata vareliano

import Evolution from './Evolution';
import TypeEffect from './TypeEffect';

function CardInfo() {
  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Card Info</h2>
      <div className="flex gap-4">
        <Evolution text="Evolution Component" />
        <TypeEffect text="Type Effect Component" />
      </div>
    </section>
  );
}

export default CardInfo;