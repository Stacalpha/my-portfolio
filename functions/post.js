const compat = require("next-aws-lambda");
const HomePage = require("./pages/post");

exports.handler = (event, context, callback) => {
  console.log("[render] ", event.path)
  event.requestContext = {};
  compat(HomePage)(event, context, callback);
};
