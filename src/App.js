import React, { useEffect, useState } from 'react';
import About from './routes/About';
import Development from './routes/Development';
import Others from './routes/Others';
import Careers from './routes/Careers';
import Contact from './routes/Contact';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css'
import { AnimatePresence } from 'framer-motion';

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
            <Route path="/" exact={true} component={About}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/development" component={Development}></Route>
            <Route path="/others" component={Others}></Route>
            <Route path="/careers" component={Careers}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </AnimatePresence>
      </>
  );
}

export default App;





// git init > 사이트에서 new repository 생성 > git remote add oritin "https://~~" > git add . > git commit -m "1. before framer motion was applied" > git push origin master