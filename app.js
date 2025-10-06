// app.js
import StudentCollection from './StudentCollection.js';

//  Initialize the collection with some students
const students = [
  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
  { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
  { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
  { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

//  Create a new StudentCollection object
const studentCollection = new StudentCollection(students);

// Find a student by name and show in the screen
const foundStudent = studentCollection.getStudentByName("Jane Smith");
console.log("Found student:", foundStudent);


// Add a new student
studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);

// Find the top student based on grades
const topStudent = studentCollection.getTopStudent();
console.log("Top student:", topStudent);


// TASK: test all the methods you have created:

// Remove a student by name
studentCollection.removeStudentByName("Sam Green");
console.log("After removing Sam Green:", studentCollection.students);

// Update grades for a student
studentCollection.updateStudentGrades("John Doe", [90, 85, 88]);
console.log("Updated grades for John Doe:", studentCollection.getStudentByName("John Doe").grades);

// Calculate average grade for a student
const avgJane = studentCollection.calculateAverageGrade("Jane Smith");
console.log("Jane Smith's average grade:", avgJane);

// Get enrolled students
console.log("Enrolled students:", studentCollection.getEnrolledStudents());
// Get students above a certain age
console.log("Students above age 19:", studentCollection.getStudentsAboveAge(19));

// Get top student
console.log("Top student:", studentCollection.getTopStudent());

// Get student summaries
console.log("Student summaries:", studentCollection.getStudentSummaries());

// Get top students above a threshold

// Get enrolled student names
console.log("Enrolled student names:", studentCollection.getEnrolledStudents());

// Get honor roll students (average >= 90)
console.log("Honor roll students:", studentCollection.getHonorRollStudents());


// Serialize the students to JSON
const serializedData = studentCollection.serializeStudents();
console.log("Serialized Data:", serializedData);


// Deserialize the JSON back into the collection
studentCollection.deserializeStudents(serializedData);
console.log("Deserialized Data:", studentCollection.students);