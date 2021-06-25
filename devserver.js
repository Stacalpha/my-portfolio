const express = require('express');
const { exec } = require('child_process');

const app = express();

function start() {
  const PORT = process.env.PORT || 3000;
  const build = './public';
  
  app.use(express.static(build));
  
  app.listen(PORT, ()=> console.log(`Serving ${build} folder on port ${PORT}`));
}

exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  start();
});
