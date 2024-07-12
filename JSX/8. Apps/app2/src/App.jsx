import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
