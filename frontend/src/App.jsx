import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage'
import Overview from './views/Overview';
import Certificates from './views/Certificates';
import Achievements from './views/Achievements/Achievements';
import Wallet from './views/Wallet/Wallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;
