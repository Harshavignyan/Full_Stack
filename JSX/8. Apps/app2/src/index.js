import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Countries from './components/Countries';
import Flagofcountry from './components/Flagofcountry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="countries" element={<Countries></Countries>}>
            <Route path="/countries/:ac" element={<Flagofcountry></Flagofcountry>}></Route>
          </Route>
        </Route>
    </Routes>
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
