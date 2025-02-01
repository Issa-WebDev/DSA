const students = ["Issa", "Chico", "Abdoul ahmid", "Amao", "Morel"];

const findSpecificStudents = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(allStudents[i]);
    }
  }
};

findSpecificStudents(students, "Chico");
