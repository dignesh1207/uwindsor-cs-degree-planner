import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import Planner from './components/Planner';
import LoginModal from './components/LoginModal';

export default function App() {
  const [view, setView] = useState('onboarding');
  const [load, setLoad] = useState('full');
  const [showLogin, setShowLogin] = useState(false);

  const handleOnboardingSubmit = ({ load }) => {
    setLoad(load);
    setView('planner');
  };

  return (
    <AuthProvider>
      <Header view={view} onLoginClick={() => setShowLogin(true)} />
      {view === 'onboarding' && <Onboarding onSubmit={handleOnboardingSubmit} />}
      {view === 'planner' && <Planner load={load} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </AuthProvider>
  );
}
