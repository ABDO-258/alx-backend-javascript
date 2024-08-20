const { readDatabase } = require('../utils'); // Import the readDatabase function

class StudentsController {
  // Method to get all students
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const sortedFields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of sortedFields) {
        const firstNames = students[field];
        responseText += `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  // Method to get students by major
  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const firstNames = students[major] || [];

      const responseText = `List: ${firstNames.join(', ')}`;
      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;