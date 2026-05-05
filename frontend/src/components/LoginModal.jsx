import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginModal({ onClose }) {
  const { login, register } = useAuth();
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (tab === 'login') {
        await login(email, password);
        onClose();
      } else {
        await register(email, password);
        setSuccess('Account created! You can now log in.');
        setTab('login');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={styles.card}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>

        <div style={styles.tabs}>
          <button
            style={{ ...styles.tab, ...(tab === 'login' ? styles.activeTab : {}) }}
            onClick={() => { setTab('login'); setError(''); setSuccess(''); }}
          >
            Login
          </button>
          <button
            style={{ ...styles.tab, ...(tab === 'register' ? styles.activeTab : {}) }}
            onClick={() => { setTab('register'); setError(''); setSuccess(''); }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.successMsg}>{success}</p>}
          <button type="submit" style={styles.submitBtn}>
            {tab === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  card: {
    background: '#fff',
    padding: 30,
    borderRadius: 8,
    width: '100%',
    maxWidth: 400,
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: 10, right: 15,
    background: 'none',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
    color: '#333',
  },
  tabs: {
    display: 'flex',
    marginBottom: 20,
    borderBottom: '2px solid #eee',
  },
  tab: {
    flex: 1,
    padding: '10px 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    borderBottom: '2px solid #000',
    marginBottom: -2,
  },
  label: {
    display: 'block',
    fontSize: 16,
    marginBottom: 6,
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    border: '2px solid #000',
    borderRadius: 0,
    marginBottom: 15,
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    margin: '0 0 12px',
  },
  successMsg: {
    color: 'green',
    fontWeight: 'bold',
    margin: '0 0 12px',
  },
  submitBtn: {
    width: '100%',
    padding: 10,
    fontSize: 18,
    background: '#fff',
    color: '#000',
    border: '2px solid #000',
    borderRadius: 5,
    cursor: 'pointer',
    boxShadow: '0 0 15px rgba(255,0,0,0.4), inset 0 0 10px rgba(255,0,0,0.1)',
  },
};
