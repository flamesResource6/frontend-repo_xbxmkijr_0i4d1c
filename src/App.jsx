import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
