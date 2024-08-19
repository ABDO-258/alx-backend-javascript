const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    // Read the file synchronously
    const data = await fs.readFileSync(path, 'utf-8');
    // Split the data into lines
    const lines = data.trim().split('\n');
    // Skip the header line
    lines.shift();
    const fields = {};
    let NumberOfStudents = 0;
    let output = '';
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
    output += `Number of students: ${NumberOfStudents}\n`;
    for (const [field, firstNames] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}\n`;
    }
    return output.trim(); // Return the output string
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  // Get the database path from the arguments
  const filePath = process.argv[2];
  if (filePath) {
    try {
      const studentList = await countStudents(filePath);
      res.status(200).send(`This is the list of our students\n${studentList}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
