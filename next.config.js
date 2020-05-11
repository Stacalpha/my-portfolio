const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: 'public/_next',
  target: 'serverless'
});
 