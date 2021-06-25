const compat = require("next-aws-lambda");
const HomePage = require("./pages/index");

exports.handler = (event, context, callback) => {
  console.log("[rendering] ", event.path)
  event.requestContext = {};
  compat(HomePage)(event, context, callback);
};
