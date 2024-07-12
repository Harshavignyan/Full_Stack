import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

/* <div className="App">
      <h1 className="H">Welcome to Edupoly!</h1>
      <div className="navbar">
        <Courses />
        <Login />
        <Signup />
      </div>
    </div>
*/