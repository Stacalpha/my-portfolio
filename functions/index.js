const compat = require("next-aws-lambda");
const HomePage = require("./pages/home");

exports.handler = (event, context, callback) => {
  console.log("[rendering] ", event.path)
  event.requestContext = {};
  compat(HomePage)(event, context, callback);
};
