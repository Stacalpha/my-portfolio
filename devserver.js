const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const build = './public';

app.use(express.static(build));

app.listen(PORT, ()=>console.log(`Serving ${build} folder on port ${PORT}`));