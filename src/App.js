import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './layouts/admin';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< Login />} />
        </Routes>
    </Router>
  );
}

export default App;
