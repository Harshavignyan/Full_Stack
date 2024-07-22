import logo from './logo.svg';
import './App.css';
import {Counter} from './features/counter/Counter'
import {Todo} from './features/todo/Todo'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <br /><br />
      <Todo></Todo>
    </div>
  );
}

export default App;
