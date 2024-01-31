import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components and Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
