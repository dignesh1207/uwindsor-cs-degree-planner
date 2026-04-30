// Get DOM Elements
const submitBtn = document.getElementById("submitBtn");
const onboardingView = document.getElementById("onboarding-view");
const plannerView = document.getElementById("planner-view");
const headerInfo = document.getElementById("header-info");
const infoTile = document.getElementById("info-tile");
const semLoadTag = document.getElementById("sem-load-tag");

// Info Tile Elements
const infoCode = document.getElementById("info-code");
const infoName = document.getElementById("info-name");
const infoProfName = document.getElementById("info-prof-name");
const rmpBox = document.getElementById("rmp-box");
const rmpScore = document.getElementById("rmp-score");
const infoTagPill = document.getElementById("info-tag-pill");

// State variable
let currentSelectedCode = null;

// Submit Button Logic
submitBtn.addEventListener("click", () => {
  const loadOptions = document.getElementsByName("load");
  let selectedLoad = "F";
  for (const option of loadOptions) {
    if (option.checked) {
      selectedLoad = option.value === "part" ? "P" : "F";
    }
  }
  semLoadTag.textContent = selectedLoad;
  onboardingView.classList.add("hidden");
  plannerView.classList.remove("hidden");
  headerInfo.classList.remove("hidden");

  // Fetch and display courses from the database when the view opens!
  loadCourses(selectedLoad);
});

// --- Dynamic Course Rendering ---
const courseListContainer = document.getElementById('course-list-container');

// Add 'loadType' as a parameter
async function loadCourses(loadType) {
  try {
    const response = await fetch('http://localhost:5000/api/courses');
    const courses = await response.json();

    courseListContainer.innerHTML = '';

    // Limit the courses based on the load type
    let coursesToRender = courses;
    if (loadType === 'F') {
      coursesToRender = courses.slice(0, 5); // Max 5 for full-time
    } else if (loadType === 'P') {
      coursesToRender = courses.slice(0, 3); // Max 3 for part-time
    }

    // Loop through the limited array instead of all courses
    coursesToRender.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.className = 'course-item';
      courseDiv.onclick = () => toggleCourseInfo(course.code, course.name, 'TBA', 'M');
      courseDiv.innerHTML = `
        <div class="course-left">
          <span class="c-code">${course.code}</span>
          <span class="c-name">${course.name}</span>
        </div>
        <span class="c-tag">M</span>
      `;
      courseListContainer.appendChild(courseDiv);
    });

  } catch (error) {
    console.error('Error fetching courses:', error);
    courseListContainer.innerHTML = '<p style="color: red;">Failed to load catalog from database.</p>';
  }
}

// Toggle Logic
window.toggleCourseInfo = function (code, name, prof, tag) {
  // Toggle Visibility if clicking same course
  if (
    currentSelectedCode === code &&
    !infoTile.classList.contains("hidden-tile")
  ) {
    infoTile.classList.add("hidden-tile");
    currentSelectedCode = null;
    return;
  }

  currentSelectedCode = code;

  // 1. Update Basic Info
  infoCode.textContent = code;
  infoName.textContent = name;
  infoProfName.textContent = prof;

  // 2. Generate Random Rating (0.0 - 5.0)
  const rating = (Math.random() * 5).toFixed(1);
  rmpScore.textContent = rating;

  // 3. Apply Rating Color
  // Remove old color classes
  rmpBox.classList.remove(
    "bg-red",
    "bg-orange",
    "bg-yellow",
    "bg-light-green",
    "bg-dark-green",
  );

  if (rating <= 1.0) {
    rmpBox.classList.add("bg-red");
  } else if (rating <= 2.0) {
    rmpBox.classList.add("bg-orange");
  } else if (rating <= 3.0) {
    rmpBox.classList.add("bg-yellow");
  } else if (rating <= 4.0) {
    rmpBox.classList.add("bg-light-green");
  } else {
    rmpBox.classList.add("bg-dark-green");
  }

  // 4. Update Tag Pill
  // Remove old tag classes
  infoTagPill.classList.remove("tag-red", "tag-blue", "tag-green");
  let tagText = "";

  if (tag === "M") {
    tagText = "M Major Requirement";
    infoTagPill.classList.add("tag-red");
  } else if (tag === "P") {
    tagText = "P Program Requirement";
    infoTagPill.classList.add("tag-blue");
  } else {
    tagText = "E Elective";
    infoTagPill.classList.add("tag-green");
  }
  infoTagPill.textContent = tagText;

  // Show Tile
  infoTile.classList.remove("hidden-tile");
};

// Home Button Logic
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload

  // Reset visibility to show onboarding and hide the planner
  onboardingView.classList.remove("hidden");
  plannerView.classList.add("hidden");
  headerInfo.classList.add("hidden");
});

// --- Login & Authentication Logic ---
const loginBtn = document.querySelector('.login-btn');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

// 1. Open the modal (Strictly remove hidden)
loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});

// Handle the actual login submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the page from reloading
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  try {
    // Make the POST request to your new backend
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Success! Save the JWT token to the browser's Local Storage
      localStorage.setItem('token', data.token);
      
      // 2. Update the UI to show they are logged in (Removed the onboardingView line)
      loginModal.classList.add('hidden');
      loginBtn.textContent = 'Logged In';
      loginMessage.textContent = '';
      
      alert('Successfully logged in! Your token is saved.');
    } else {
      // Show the error message from the server (e.g., "Invalid credentials")
      loginMessage.textContent = data.message || 'Login failed.';
    }
  } catch (error) {
    console.error('Fetch error:', error);
    loginMessage.textContent = 'Server error. Make sure your backend is running!';
  }
});

// Close the modal if they click the dark background outside the white box
loginModal.addEventListener('click', (e) => {
  // e.target is the exact element the user clicked.
  // If they clicked the modal background, hide it. 
  // If they clicked the form inside, it ignores this.
  if (e.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});