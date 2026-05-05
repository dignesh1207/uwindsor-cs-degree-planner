export default function Onboarding({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const load = form.querySelector('input[name="load"]:checked').value;
    onSubmit({ load });
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Course Picker Helper</h1>
        <p style={styles.heroDesc}>
          A helper for post-secondary students to plan their degrees and view
          ratings for courses and professors.
        </p>
        <div style={styles.catalogSummary}>
          <div style={styles.summaryCard}>
            <strong style={styles.cardTitle}>Course Catalog</strong>
            <p style={styles.cardText}>
              Check ratings from other students to see what they think about your future classes.
            </p>
          </div>
          <div style={styles.summaryCard}>
            <strong style={styles.cardTitle}>Professor Insights</strong>
            <p style={styles.cardText}>
              View specific scores for professors to help you choose the right section.
            </p>
          </div>
        </div>
      </section>

      <form style={styles.formGrid} onSubmit={handleSubmit}>
        <div style={styles.column}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Country</label>
            <select style={styles.boxInput}>
              <option value="canada">Canada</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>School</label>
            <select style={styles.boxInput}>
              <option value="uwindsor">University of Windsor</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Department</label>
            <select style={styles.boxInput}>
              <option value="cs">Computer Science</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Program</label>
            <select style={styles.boxInput}>
              <option value="bcs">Bachelor of Computer Science</option>
            </select>
          </div>
        </div>

        <div style={styles.column}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Starting Semester</label>
            <select style={styles.boxInput}>
              <option value="fall2026">Fall 2026</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Course Load</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioOption}>
                <input type="radio" name="load" value="full" defaultChecked /> Full time
              </label>
              <label style={styles.radioOption}>
                <input type="radio" name="load" value="part" /> Part time
              </label>
            </div>
          </div>
          <div style={styles.submitContainer}>
            <button type="submit" style={styles.submitBtn}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1200,
    margin: '40px auto',
    padding: '0 20px',
  },
  hero: {
    textAlign: 'left',
    padding: '20px 0 40px 0',
    borderBottom: '2px solid #eee',
    marginBottom: 40,
  },
  heroTitle: {
    fontSize: 42,
    marginTop: 0,
    marginBottom: 15,
  },
  heroDesc: {
    fontSize: 18,
    color: '#555',
    maxWidth: 800,
    marginBottom: 30,
    lineHeight: 1.5,
  },
  catalogSummary: {
    display: 'flex',
    gap: 30,
    marginTop: 20,
  },
  summaryCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    width: 300,
    boxShadow: '2px 2px 8px rgba(0,0,0,0.05)',
  },
  cardTitle: {
    display: 'block',
    fontSize: 18,
    marginBottom: 8,
  },
  cardText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.4,
    color: '#666',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
  },
  column: {},
  formGroup: {
    marginBottom: 0,
  },
  label: {
    display: 'block',
    fontSize: 24,
    marginBottom: 10,
    color: '#000',
  },
  boxInput: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    border: '2px solid #000',
    borderRadius: 0,
    backgroundColor: '#fff',
    appearance: 'none',
    marginBottom: 30,
    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px top 50%',
    backgroundSize: '12px auto',
  },
  radioGroup: {
    marginTop: 10,
  },
  radioOption: {
    display: 'block',
    fontSize: 18,
    marginBottom: 8,
    cursor: 'pointer',
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  submitBtn: {
    backgroundColor: '#fff',
    color: '#000',
    border: '2px solid #000',
    padding: '10px 40px',
    fontSize: 24,
    cursor: 'pointer',
    borderRadius: 5,
    boxShadow: '0 0 15px rgba(255,0,0,0.4), inset 0 0 10px rgba(255,0,0,0.1)',
  },
};
