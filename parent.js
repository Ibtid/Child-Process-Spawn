const { spawn } = require('child_process');

// Spawn the child process
const child = spawn('python', ['child.py']);

// Listen for data from the child process
child.stdout.on('data', (data) => {
  const message = data.toString().trim();
  console.log('Received from child:', message);
});

// Send data to the child process
const dataToSend = 'Hello from parent!';
child.stdin.write(dataToSend);
child.stdin.end();
