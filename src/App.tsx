import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Skills from "./skills/Skills";

function App() {
  return (
   <div>
     <Header/>
     <Main/>
     <Skills/>
   </div>

  );
}

export default App;
