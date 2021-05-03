import React, { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RegisterForm from './RegisterForm';
import { AuthProvider } from '../utilities/AuthContext';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <div className="container">
            <Switch>

              <Route path="/register">
                <RegisterForm 
                  register
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
