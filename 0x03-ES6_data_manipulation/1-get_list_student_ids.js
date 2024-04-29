export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const studentsIds = array.map((obj) => obj.id);
    return studentsIds;
  }
  return [];
}
