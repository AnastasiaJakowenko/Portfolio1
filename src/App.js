// import logo from './logo.svg'
import '../src/App.css';
import { NavBar } from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hi } from './components/hi.js'


function App() {
  return (
    <div className="App">
      <Hi />
      <NavBar />
    </div>
  );
}

export default App;
