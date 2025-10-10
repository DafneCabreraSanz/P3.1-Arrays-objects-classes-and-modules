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
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].name === name) {
        this.students.splice(i, 1);
        return;
      }
    }
  }

  //updateStudentGrades
  updateStudentGrades(name, newGrades) {
    const student = this.getStudentByName(name);
    if (student) {
      student.grades = newGrades;
    }
  }

  //calculateAverageGrade with for 
  calculateAverageGrade(name) {
    const student = this.getStudentByName(name);
    if (!student || !student.grades) {
      return null;
    }
    let total = 0;
    for (let i = 0; i < student.grades.length; i++) {
      total += student.grades[i];
    }
    return total / student.grades.length;
  }

  //getEnrolledStudents with filter
  getEnrolledStudents() {
    return this.students.filter(s => {
      if (!s.isEnrolled) return false;
      return s.isEnrolled;
    });
  }


  //getStudentsAboveAge
  getStudentsAboveAge(age) {
    return this.students.filter(s => s.age > age);
  }


  //getStudentSummaries
  getStudentSummaries() {
    return this.students.map(s => ({
      name: s.name,
      averageGrade: this.calculateAverageGrade(s.name)
    }));
  }

 // get student with the highest average grade
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

  //Filters students threshold
  getTopStudents(threshold) {
    return this.students.filter(s => {
      const avg = this.calculateAverageGrade(s.name);
      return avg !== null && avg >= threshold;
    });
  }




    //getHonorRollStudents
    getHonorRollStudents() {
    return this.students.filter(s => {
      if (!s.grades) return false;
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