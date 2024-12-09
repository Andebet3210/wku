import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/programs';
import Title from './components/Title/Title';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title ='What we Offer'/>
      <Programs/>
      <About/>
       <Title subTitle='Gallery' title ='Campus Photos'/>

    </div>
    </div>
  );
};

export default App;