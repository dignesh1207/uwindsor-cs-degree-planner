// Get DOM Elements
const submitBtn = document.getElementById("submitBtn");
const onboardingView = document.getElementById("onboarding-view");
const plannerView = document.getElementById("planner-view");
const headerInfo = document.getElementById("header-info");
const infoTile = document.getElementById("info-tile");

// Info Tile Elements to update
const infoName = document.getElementById("info-name");
const infoProf = document.getElementById("info-prof");
const infoTag = document.getElementById("info-tag");

// Event Listener for Submit Button
submitBtn.addEventListener("click", () => {
  // 1. Hide the Onboarding Form
  onboardingView.classList.add("hidden");

  // 2. Show the Planner View
  plannerView.classList.remove("hidden");

  // 3. Show the extra Header Info
  headerInfo.classList.remove("hidden");
});

// Function to show course info (called by onclick in HTML)
window.showCourseInfo = function (code, name, prof, tag) {
  // 1. Populate data
  infoName.textContent = `${code} - ${name}`;
  infoProf.textContent = prof;

  // Expand tag meaning
  let tagFull = tag;
  if (tag === "M") tagFull = "Major Requirement";
  if (tag === "P") tagFull = "Program Requirement";
  if (tag === "E") tagFull = "Elective";

  infoTag.textContent = `${tagFull} (${tag})`;

  // 2. Make the tile visible
  infoTile.classList.remove("hidden-tile");
};
