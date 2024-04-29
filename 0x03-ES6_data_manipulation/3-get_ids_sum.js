export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    const studentsIds = array.map((obj) => obj.id);
    const sum = studentsIds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }
  return [];
}
