console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  // Trim any extra whitespace/newlines from the input
  const name = data.trim();

  // Display the user's input
  console.log(`Your name is: ${name}`);

  // Display the closing message and exit the process
  console.log('This important software is now closing');
  process.exit();
});

process.stdin.on('end', () => {
  // Display the closing message
  console.log('This important software is now closing');
});
