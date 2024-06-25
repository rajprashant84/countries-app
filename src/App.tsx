import React from 'react';
import Home from './components/pages/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;


