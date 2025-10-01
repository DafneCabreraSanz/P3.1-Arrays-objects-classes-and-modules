// StudentCollection.js

//Constructor
export default class StudentCollection {
  constructor(students = []) {
    this.students = students;
  }

  //addStudent
  addStudent(student) {
    this.students.push(student);
  }

  //getStudentByName
  getStudentByName(name) {
    return this.students.find(s => s.name === name);
  }

  //removeStudentByName
  removeStudentByName(name) {
    this.students = this.students.filter(s => s.name !== name);
  }

  //updateStudentGrades
  updateStudentGrades(name, newGrades) {
    const student = this.getStudentByName(name);
    if (student) {
      student.grades = newGrades;
    }
  }

  //calculateAverageGrade
  calculateAverageGrade(name) {
    const student = this.getStudentByName(name);
    if (!student || !student.grades || student.grades.length === 0) return null;
    const sum = student.grades.reduce((a, b) => a + b, 0);
    return sum / student.grades.length;
  }

  //getEnrolledStudents
  getEnrolledStudents() {
    return this.students.filter(s => s.enrolled);
  }


  //getStudentsAboveAge
  getStudentsAboveAge(age) {
    return this.students.filter(s => s.age > age);
  }

  //getTopStudent
  getTopStudent() {
    let topStudent = null;
    let highestAvg = -1;

    this.students.forEach(s => {
      const avg = this.calculateAverageGrade(s.name);
      if (avg !== null && avg > highestAvg) {
        highestAvg = avg;
        topStudent = s;
      }
    });
    return topStudent;
  }


  //getStudentSummaries
  getStudentSummaries() {
    return this.students.map(s => ({
      name: s.name,
      averageGrade: this.calculateAverageGrade(s.name)
    }));
  }

  getTopStudents(threshold) {
    return this.students.filter(s => {
      const avg = this.calculateAverageGrade(s.name);
      return avg !== null && avg > threshold;
    });
  }

  //getStudentSummaries
  getStudentSummaries() {
    return this.students.map(s => ({
      name: s.name,
      averageGrade: this.calculateAverageGrade(s.name)
    }));
  }

  getTopStudents(threshold) {
    return this.students.filter(s => {
      const avg = this.calculateAverageGrade(s.name);
      return avg !== null && avg > threshold;
    });
  }

  //getEnrolledStudentNames
  getEnrolledStudentNames() {
   const names = [];
   for (const s of this.students) {
     if (s.enrolled) {
       names.push(s.name);
     }
   }
   return names;
  }


  //formatGrades
  formatGrades() {
    
  }

    //getHonorRollStudents
    getHonorRollStudents() {
    return this.students.filter(s => {
      if (!s.grades || s.grades.length === 0) return false;
        const avg = this.calculateAverageGrade(s.name);
      return avg >= 90;
    });
  }

    //serializeStudents
  serializeStudents() {
    return JSON.stringify(this.students);
  }

    //deserializeStudents
  deserializeStudents(jsonString) {
    try {
      this.students = JSON.parse(jsonString);
    } catch (e) {
      this.students = [];
    }
  }
}