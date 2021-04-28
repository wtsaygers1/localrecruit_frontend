import React, { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
