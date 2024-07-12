import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Courses from './components/Courses.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="courses" element={<Courses></Courses>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signup" element={<Signup></Signup>}></Route>
            </Route>
        </Routes >
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
