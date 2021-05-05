import React, { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import RegisterForm from './RegisterForm';
import Login from './Login';
import { AuthProvider } from '../utilities/AuthContext';
import history from '../utilities/history';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router history={history}>
          <Header />
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

            </Switch>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
