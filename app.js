import { courses } from "./data/courses.js"; 
import { DegreePlanner } from "./logic/planner.js";

const planner = new DegreePlanner();
const courseSelect = document.getElementById("courseSelect");
const output = document.getElementById("output");

// Populate Dropdown
courses.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.code;
  opt.textContent = `${c.code} - ${c.name}`;
  courseSelect.appendChild(opt);
});

function renderUI() {
  output.innerHTML = ""; // Clear current view
  
  for (const semester in planner.plan) {
    if (planner.plan[semester].length > 0) {
      const section = document.createElement("div");
      section.className = "semester-block";
      section.innerHTML = `<h3>${semester}</h3><ul>${planner.plan[semester]
        .map(code => `<li>${code}</li>`).join("")}</ul>`;
      output.appendChild(section);
    }
  }
}

document.getElementById("addBtn").onclick = () => {
  const code = courseSelect.value;
  const semester = document.getElementById("semesterSelect").value;
  const course = courses.find(c => c.code === code);

  try {
    planner.addCourse(course, semester);
    renderUI();
  } catch (e) {
    alert(e.message);
  }
};