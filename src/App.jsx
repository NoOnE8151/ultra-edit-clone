import './App.css'
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import Instructions from './components/instructions';
import Tiers from './components/tiers';
import Testimonials from './components/testimonials';

export default function App() {
  return ( 
  <>
    <Header />
    <Main />
    <Sidebar />
    <Instructions />
    <Tiers />
    <Testimonials />
  </>
  );
}
