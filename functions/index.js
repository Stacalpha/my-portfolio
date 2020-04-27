const compat = require("next-aws-lambda");
const HomePage = require("../public/_next/serverless/pages/home");

exports.handler = (event, context, callback) => {
  console.log("[rendering] ", event.path)
  event.requestContext = {};
  compat(HomePage)(event, context, callback);
};
