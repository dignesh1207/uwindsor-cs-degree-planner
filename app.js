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
});

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
