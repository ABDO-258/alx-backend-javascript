const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    // Split the data into lines
    const lines = data.trim().split('\n');
    // Skip the header line
    lines.shift();
    const fields = {};
    let NumberOfStudents = 0;
    // Process each student line
    for (const line of lines) {
      if (line.trim() !== '') {
        const [firstName, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
        NumberOfStudents += 1;
      }
    }
    console.log(`Number of students: ${NumberOfStudents}`);
    for (const [field, firstNames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
