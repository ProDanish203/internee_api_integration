import './App.css';
import { Router } from './config/Router';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from 'sonner';

function App() {
  return (
    <main className='bg-bg text-text min-h-screen'>
      <Toaster position='top-right' richColors/>
      <Header/>
      <div className='px-3 max-w-[1600px] w-full min-h-[80vh] mx-auto my-10'>
        <Router/>
      </div>

      <Footer/>
    </main>
  );
}

export default App;
