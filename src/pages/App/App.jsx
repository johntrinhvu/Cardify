import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import BizToken from '../CreateBizToken/BizToken.jsx';

import '../App/App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />}/>
            <Route path="/card/new" element={<BizToken />} />

          </Routes>
        </>
      ) : (
        <Routes>
          {/* Show auth page if not logged in, otherwise show homepage */}
          <Route path="/" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}