import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import HookUseCallBack from './components/hooks-practice/practice-usecallback';
import HookUseState from './components/hooks-practice/practice-usestate';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="about" element={ <About/>} />
      <Route path="contact" element={ <Contact/>} />
      <Route path="usecallback" element={ <HookUseCallBack/>} />
      <Route path="usestate" element={ <HookUseState/>} />
    </Routes>
  );
}

export default App;
