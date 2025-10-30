// Dayoh, Vallerian Dava
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;