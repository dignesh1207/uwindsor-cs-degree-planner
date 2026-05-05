const TAG_CONFIG = {
  M: { label: 'M  Major Requirement', className: 'tag-red', style: { backgroundColor: '#c0392b' } },
  P: { label: 'P  Program Requirement', className: 'tag-blue', style: { backgroundColor: '#2980b9' } },
  E: { label: 'E  Elective', className: 'tag-green', style: { backgroundColor: '#27ae60' } },
};

const ratingColor = (r) => {
  if (r <= 1.0) return '#e74c3c';
  if (r <= 2.0) return '#e67e22';
  if (r <= 3.0) return '#f1c40f';
  if (r <= 4.0) return '#2ecc71';
  return '#27ae60';
};

export default function InfoTile({ course, onClose }) {
  if (!course) return null;

  const rating = course.rating;
  const tag = TAG_CONFIG[course.tag] || TAG_CONFIG.M;

  return (
    <div style={styles.card}>
      <div style={styles.headerArea}>
        <h1 style={styles.code}>{course.code}</h1>
        <h3 style={styles.name}>{course.name}</h3>
      </div>

      <div style={styles.metaRow}>
        <div style={styles.profName}>{course.prof || 'TBA'}</div>
        <div style={{ ...styles.rmpBox, backgroundColor: ratingColor(rating), color: rating > 1 && rating <= 3 ? '#000' : '#fff' }}>
          <span style={styles.rmpScore}>{rating.toFixed(1)}</span>
          <span style={styles.rmpMax}>/5</span>
        </div>
      </div>

      <div style={styles.scheduleRow}>
        <div style={styles.schCol}>
          <strong style={styles.wavyUnderline}>Lec:</strong> Mon – Wed<br />8:30 AM – 9:50 AM
        </div>
        <div style={styles.schCol}>
          <strong style={styles.wavyUnderline}>Lab:</strong> Fri<br />4:00 PM – 5:20 PM
        </div>
      </div>

      <div style={styles.btnRow}>
        <button style={styles.replaceBtn}>Replacement Request</button>
      </div>

      <div style={styles.descBox}>
        {course.description || 'No description available.'}
      </div>

      <div style={styles.tagRow}>
        <span style={{ ...styles.tagPill, ...tag.style }}>{tag.label}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '3px solid #ccc',
    padding: 15,
    background: '#fff',
    boxShadow: '6px 6px 12px rgba(0,0,0,0.15)',
  },
  headerArea: {
    textAlign: 'center',
    marginBottom: 20,
  },
  code: {
    fontSize: 32,
    margin: 0,
    fontWeight: 'normal',
  },
  name: {
    fontSize: 20,
    margin: '5px 0 0',
    fontWeight: 'normal',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  profName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rmpBox: {
    padding: '6px 12px',
    fontWeight: 'bold',
    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    borderRadius: 4,
  },
  rmpScore: {
    fontSize: 16,
  },
  rmpMax: {
    fontSize: '0.8em',
    opacity: 0.8,
    marginLeft: 2,
  },
  scheduleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
    fontSize: 16,
    lineHeight: 1.4,
  },
  schCol: {},
  wavyUnderline: {
    textDecoration: 'underline wavy red',
  },
  btnRow: {
    textAlign: 'center',
    marginBottom: 30,
  },
  replaceBtn: {
    background: '#fff',
    border: '2px solid #000',
    padding: '10px 20px',
    fontSize: 16,
    cursor: 'pointer',
  },
  descBox: {
    fontSize: 16,
    lineHeight: 1.5,
    marginBottom: 40,
  },
  tagRow: {},
  tagPill: {
    display: 'inline-block',
    padding: '8px 18px',
    borderRadius: 20,
    color: 'white',
    fontWeight: 'bold',
    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
};
