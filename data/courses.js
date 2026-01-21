export const courses = [
  // First Year Core
  { code: "COMP-1000", name: "Key Concepts in CS", credits: 3, prereqs: [] },
  { code: "COMP-1400", name: "Intro to Programming I", credits: 3, prereqs: [] },
  { code: "MATH-1020", name: "Mathematical Foundations", credits: 3, prereqs: [] },
  { code: "MATH-1250", name: "Linear Algebra I", credits: 3, prereqs: [] },
  { code: "MATH-1720", name: "Differential Calculus", credits: 3, prereqs: [] },
  { code: "COMP-1410", name: "Intro to Programming II", credits: 3, prereqs: ["COMP-1400", "COMP-1000"] },
  
  // Second Year Core
  { code: "COMP-2120", name: "Object-Oriented Programming", credits: 3, prereqs: ["COMP-1410"] },
  { code: "COMP-2540", name: "Data Structures & Algorithms", credits: 3, prereqs: ["COMP-2120", "COMP-1000"] },
  { code: "COMP-2560", name: "Systems Programming", credits: 3, prereqs: ["COMP-1410"] },
  { code: "COMP-2650", name: "Digital Design", credits: 3, prereqs: ["COMP-1400", "COMP-1000"] },
  { code: "COMP-2660", name: "Computer Architecture", credits: 3, prereqs: ["COMP-2650"] },
  
  // Third Year Core
  { code: "COMP-3150", name: "Database Systems", credits: 3, prereqs: ["COMP-2540"] },
  { code: "COMP-3220", name: "OO Software Analysis", credits: 3, prereqs: ["COMP-2120"] },
  { code: "COMP-3300", name: "Operating Systems", credits: 3, prereqs: ["COMP-2120", "COMP-2560"] },
  { code: "COMP-3400", name: "Advanced OO Design", credits: 3, prereqs: ["COMP-2120"] }
];