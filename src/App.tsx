import Header from './components/Header'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='flex'>
      <Header />
      <div className="flex-col w-full">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
