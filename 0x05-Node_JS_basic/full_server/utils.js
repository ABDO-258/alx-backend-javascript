const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, 'utf-8');
    // Split the data into lines
    const lines = data.trim().split('\n');
    // Skip the header line
    lines.shift();
    const fields = {};

    // Process each student line
    for (const line of lines) {
      if (line.trim() !== '') {
        const [firstName, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }

    return fields;
  } catch (error) {
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = { readDatabase };
