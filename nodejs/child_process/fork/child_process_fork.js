//index.js
const { fork } = require('child_process');
const ls = fork('child.js');
let count = 0;
//exiting the thread when child process ended
ls.on('exit', (code) => {
  console.log(`child_process exited with code ${code}`);
});
ls.on('message', (msg) => {
  console.log(`PARENT: message from child process is ${msg}`);
  count = parseInt(msg) + 1;
  console.log('PARENT: +1 from parent');
  ls.send(count);
});
