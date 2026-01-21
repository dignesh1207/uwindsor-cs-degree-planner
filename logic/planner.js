export class DegreePlanner {
  constructor() {
    this.plan = { Fall: [], Winter: [], Summer: [] };
    this.completed = new Set();
  }

  canAdd(course) {
    // Checks if every prerequisite is in the completed Set
    return course.prereqs.every(p => this.completed.has(p));
  }

  addCourse(course, semester) {
    if (this.completed.has(course.code)) {
      throw new Error("You have already added this course to your plan.");
    }
    if (!this.canAdd(course)) {
      throw new Error(`Prerequisites not met. Needs: ${course.prereqs.join(", ")}`);
    }
    this.plan[semester].push(course.code);
    this.completed.add(course.code);
  }
}