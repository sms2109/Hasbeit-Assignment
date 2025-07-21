const students = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];
const result = students.map(studentObj => {
  const studentName = Object.keys(studentObj)[0]; 
  const subjects = studentObj[studentName];

  const scores = Object.values(subjects); 
  const total = scores.reduce((sum, val) => sum + val, 0);
  const average = Math.floor(total / scores.length); 

  return {
    [studentName]: {
      average: average
    }
  };
});

console.log(result);
