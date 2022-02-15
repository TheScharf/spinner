const spin = function() {
  const prop = '|/-\\|/-\\|';
  let time = 100;
  let newTime = 200;
  for (let arm of prop) {
    setTimeout(() => {
      process.stdout.write(`\r ${arm}  `);
    }, time);
    time += newTime;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, time);
};


spin();