
import React from 'react';
import './App.css';
import MainPage from './components/Mainpage/MainPage';
import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
