import './App.css';
import AllClubs from './components/AllClubs';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage/>}>
        </Route>
        <Route exact path="/stranger-login" element={<Login/>}>
        </Route>
        <Route exact path="/all-clubs" element={<AllClubs/>}>
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
