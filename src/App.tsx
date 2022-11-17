import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Login } from './features/my-app/Pages/Login';
import './App.css';
import Navbar from './features/my-app/Pages/Navbar';
import Contact from './features/my-app/Pages/Contact';
import Main from './features/my-app/Pages/Main';
import CreatePost from './features/my-app/Pages/create-post/CreatePost';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />}/>          
          <Route path="/Counter" element={<Counter />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/CreatePost" element={<CreatePost />}/>
          <Route path="/Contact" element={<Contact />}/>
        
        </Routes>
      </Router>
              
                
      
    </div>
  );
}

export default App;
