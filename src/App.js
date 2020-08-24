import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App;