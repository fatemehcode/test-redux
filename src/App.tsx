import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Login } from './features/my-app/Login';
import './App.css';
import Navbar from './Navbar';
import { Contacts } from './features/my-app/Contacts';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Counter" element={<Counter />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Contacts" element={<Contacts />}/>
        
        </Routes>
      </Router>
              
                
      
    </div>
  );
}

export default App;
