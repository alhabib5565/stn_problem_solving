const sortStudentsByAverageGrade = (students) => {
  const averageGrade = students
    .map((student) => {
      const totalGrads = student.grades.reduce((acc, crr) => {
        return acc + crr;
      }, 0);
      return {
        name: student.name,
        grades: totalGrads / student.grades.length,
      };
    })
    .sort((a, b) => a.grades - b.grades);
  return averageGrade;
};

const students = [
  {
    name: "Alice",
    grades: [85, 92, 78],
  },
  {
    name: "Bob",
    grades: [79, 83, 91],
  },
  {
    name: "Charlie",
    grades: [92, 88, 84],
  },
  {
    name: "Diana",
    grades: [90, 95, 89],
  },
  {
    name: "Ethan",
    grades: [76, 85, 80],
  },
];

console.log(sortStudentsByAverageGrade(students));
