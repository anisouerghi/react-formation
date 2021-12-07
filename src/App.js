import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello'
import Task from './components/task/Task';
import Search from './components/search/Search';

 
function App() {
  return (
    <div className="App">
       <Search />
       <Task /> 
       <Task /> 
       <Task /> 
    </div>
      
  );
}

export default App;
