import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './components/BaseComponent';
import SubCategory from './components/SubCategory';

function App() {
  return (
    <div className="App w-[100vw] h-[100vh]  flex bg-[#f3f3f3f3]">
      <BaseComponent/>
      <SubCategory/>
    </div>
  );
}

export default App;
