import React, { useEffect, useState } from 'react';
import About from './routes/About';
import Development from './routes/Development';
import Others from './routes/Others';
import Careers from './routes/Careers';
import Contact from './routes/Contact';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css'
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  
    }, 2000);
    
  })



  return (
    isLoading ? <div className="loading"></div> :
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={About}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/development" component={Development}></Route>
      <Route path="/others" component={Others}></Route>
      <Route path="/careers" component={Careers}></Route>
      <Route path="/contact" component={Contact}></Route>
    </HashRouter>
  );
}

export default App;
