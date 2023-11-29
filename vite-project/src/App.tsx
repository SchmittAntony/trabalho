import React from 'react';
import Header from '../src/components/Header/Header';
import JavaScriptPage from '../src/pages/Java/JavaScript'; 
import TypeScriptPage from './pages/Type/TypeScript';
import './App.css';
import ReactPage from './pages/React/React';
import HomePage from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
        <JavaScriptPage />
        <TypeScriptPage />
        <ReactPage />
      </main>
    </div>
  );
};

export default App;
