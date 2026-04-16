import { useEffect } from 'react';
import AOS from 'aos';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  useEffect(
    () => {
      AOS.init({
        duration: 1000,
        once: false,
    })
    }, []);
return (
  <div>
    <Nav />
    <Hero />
    <Body />
    <Footer />
  </div>
);
}

export default App;