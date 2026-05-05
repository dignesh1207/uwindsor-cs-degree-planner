import { useState, useEffect } from 'react';
import InfoTile from './InfoTile';
import { useAuth } from '../context/AuthContext';

export default function Planner({ load }) {
  const { authFetch } = useAuth();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [error, setError] = useState('');

  const loadTag = load === 'full' ? 'F' : 'P';
  const maxCourses = load === 'full' ? 5 : 3;

  useEffect(() => {
    authFetch('/api/courses')
      .then((res) => res.json())
      .then((data) => setCourses(Array.isArray(data) ? data.slice(0, maxCourses) : []))
      .catch(() => setError('Failed to load courses. Make sure the backend is running.'));
  }, [load]);

  const handleCourseClick = (course) => {
    if (selectedCourse?.code === course.code) {
      setSelectedCourse(null);
      return;
    }
    setSelectedCourse({
      ...course,
      prof: 'TBA',
      tag: 'M',
      rating: parseFloat((Math.random() * 5).toFixed(1)),
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.plannerGrid}>
        <div style={styles.semesterColumn}>
          <div style={styles.semesterCard}>
            <h2 style={styles.semTitle}>
              SEM [1] – [FALL] [2026] [{loadTag}]
            </h2>
            <div style={styles.courseList}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {courses.map((course) => (
                <div
                  key={course.code}
                  style={{
                    ...styles.courseItem,
                    backgroundColor: selectedCourse?.code === course.code ? '#f0f0f0' : '#fff',
                  }}
                  onClick={() => handleCourseClick(course)}
                >
                  <div style={styles.courseLeft}>
                    <span style={styles.cCode}>{course.code}</span>
                    <span style={styles.cName}>{course.name}</span>
                  </div>
                  <span style={styles.cTag}>M</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.infoColumn}>
          {selectedCourse && <InfoTile course={selectedCourse} />}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1200,
    margin: '40px auto',
    padding: '0 20px',
  },
  plannerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 40,
    alignItems: 'start',
  },
  semesterColumn: {},
  semesterCard: {
    border: '3px solid #ccc',
    padding: 15,
    background: '#fff',
    marginBottom: 20,
    boxShadow: '6px 6px 12px rgba(0,0,0,0.15)',
  },
  semTitle: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  courseList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  courseItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid #000',
    padding: 10,
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  courseLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  cCode: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cName: {
    fontSize: 14,
  },
  cTag: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoColumn: {},
};
