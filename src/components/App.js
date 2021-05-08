import React, { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { useState, useEffect } from 'react';
import Header from './Header';
// import Home from './Home';
import About from './About';
import Footer from './Footer';
import RegisterForm from './RegisterForm';
import Login from './Login';
import { AuthProvider } from '../utilities/AuthContext';
import history from '../utilities/history';
import SportPage from './SportPage'
import { axiosHelper } from '../utilities/axiosHelper';
// import logo from './logo.svg';
// import './App.css';

function App() {

  const [sports, setSports] = useState([]);

  const saveSports = res => {
    setSports(res.data)
  }

  useEffect(() => {
    axiosHelper({
      url: '/api/sports/all',
      successMethod: saveSports
    })

  }, [])

  return (
    <div className="App">
      <AuthProvider>
        <Router history={history}>
          <Header 
            sports={sports}
          />
          <div className="container">
            <Switch>
              <Route path="/register">
                <RegisterForm
                  register
                />
              </Route>
              <Route path="/login">
                <Login
                  login
                />
              </Route>
              <Route path="/sport/:name">
                <SportPage
                  sports={sports}
                />
              </Route>
            </Switch>
          </div>
          <About />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
