import { useAuth } from '../context/AuthContext';

export default function Header({ view, onLoginClick }) {
  const { token, logout } = useAuth();

  return (
    <header style={styles.topBar}>
      <div style={styles.leftNav}>
        <span style={styles.homeLink}>Home</span>
        {view === 'planner' && (
          <div style={styles.headerInfo}>
            <div>School: University of Windsor</div>
            <div>Program: Bachelor of Computer Science</div>
          </div>
        )}
      </div>
      {token ? (
        <button style={styles.loginBtn} onClick={logout}>Logout</button>
      ) : (
        <button style={styles.loginBtn} onClick={onLoginClick}>Login / Signup</button>
      )}
    </header>
  );
}

const styles = {
  topBar: {
    backgroundColor: '#000',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  leftNav: {
    display: 'flex',
    alignItems: 'center',
    gap: 25,
  },
  homeLink: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    cursor: 'pointer',
  },
  headerInfo: {
    color: 'white',
    fontSize: 14,
    lineHeight: 1.4,
  },
  loginBtn: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid #fff',
    padding: '8px 16px',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 14,
  },
};
