
import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App m-5">
      <ToDoInput/>
      <ToDoList/>
    </div>
  );
}

export default App;
