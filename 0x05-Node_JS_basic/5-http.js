const http = require('http');
const fs = require('fs');

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
    output += `Number of students: ${NumberOfStudents}`;
    for (const [field, firstNames] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`;
    }
    return output.trim(); // Return the output string
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Define the request handler
const app = http.createServer(async (req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Route handling
  if (req.method === 'GET') {
    if (req.url === '/') {
      // Respond with "Hello Holberton School!" for any request
      res.statusCode = 200;
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      // should display This is the list of our students
      res.statusCode = 200;
      res.write('This is the list of our students\n');

      // Get the database path from the arguments
      const filePath = process.argv[2];
      if (filePath) {
        try {
          const studentList = await countStudents(filePath);
          res.end(studentList);
        } catch (error) {
          res.statusCode = 500;
          res.end(error.message);
        }
      }
    }
  }
});

// listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
