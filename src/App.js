import React, { useEffect, useState } from 'react';
import About from './routes/About';
import Development from './routes/Development';
import Others from './routes/Others';
import Contact from './routes/Contact';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css'
import { AnimatePresence } from 'framer-motion';
import Timeline from './routes/Timeline';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  })



  return (
    isLoading ? <div className="loading"></div> :
      <>
        <Navigation></Navigation>
        <AnimatePresence>
          <Switch>
            <Route path="/" exact={true} component={Timeline}></Route>
            <Route path="/timeline" component={Timeline}></Route>
            <Route path="/development" component={Development}></Route>
            <Route path="/others" component={Others}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </AnimatePresence>
      </>
  );
}

export default App;