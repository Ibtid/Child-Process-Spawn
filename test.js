const test = () => {
  return new Promise((resolve) => {
    const { spawn } = require('child_process');

    // Spawn the child process
    const child = spawn('python', ['test.py']);

    child.stdout.on('data', (data) => {
      const message = data.toString().trim();
      const result = message === 'hello';
      resolve(result); // Resolve the promise with the result
    });
  });
};

const checkHello = async () => {
  try {
    const hello = await test();
    console.log(hello);
  } catch (err) {
    console.log(err);
  }
};

console.log(checkHello());
