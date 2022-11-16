import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Login } from './features/my-app/Login';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Counter" element={<Counter />}/>
          <Route path="/Login" element={<Login />}/>
        
        </Routes>
      </Router>
              
                
      
    </div>
  );
}

export default App;
