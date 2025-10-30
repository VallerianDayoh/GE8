import Generations from './Generations';
import CardInfo from './CardInfo';

function Home() {
  return (
    <main className="p-6 bg-white shadow-md">
      <Generations />
      <CardInfo />
    </main>
  );
}

export default Home;