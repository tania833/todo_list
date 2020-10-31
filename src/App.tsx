import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodoPage } from './pages/Todopage'
import { About } from './pages/About';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route component={TodoPage} path='/' exact/>
          <Route component={About} path='/about' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
