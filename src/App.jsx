import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Account from './pages/Account';

function App() {

  return (
    <Router>
      <div style={{ backgroundColor: '#82CF91', minHeight: '100vh', color: 'white' }}>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/account" element={<Account />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App
