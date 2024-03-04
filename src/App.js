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

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
