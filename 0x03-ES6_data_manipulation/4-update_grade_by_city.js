export default function updateStudentGradeByCity(array, city, newGrades) {
  if (Array.isArray(array)) {
    return array
      .filter((array) => array.location === city)
      .map((array) => {
        const updatedGrade = newGrades.find((grade) => grade.studentId === array.id);
        if (updatedGrade) {
          return { ...array, grade: updatedGrade.grade };
        }
        return { ...array, grade: 'N/A' };
      });
  }
  return [];
}
