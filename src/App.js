import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Home2 from '../src/components/admin/Home';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Alogin from './components/Alogin';
import Asignup from './components/Asignup';
import Dashboard from './components/Dashboard';
import Add from './components/admin/Add';

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/alogin" element={<Alogin />} />
          <Route path="/dashboard" element={<Dashboard homeComponent={<Home2 />}/>} />
          <Route path="/edit" element={<Dashboard homeComponent={<Add />}/>} />
          <Route path="/asignup" element={<Asignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
