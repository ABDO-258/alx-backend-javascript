export default function getStudentsByLocation(array, city) {
  if (Array.isArray(array)) {
    const studentsLocation = array.filter((obj) => obj.location === city);
    return studentsLocation;
  }
  return [];
}
