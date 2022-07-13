import React,{useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider'
import Info from './components/info/Info'
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[scrollHeight])
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Skills/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
