import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import About from './components/pages/about';


//includes
import './Assets/css/default.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={About} />


      </div>
      </Router>
    );
  }
}

export default App;
