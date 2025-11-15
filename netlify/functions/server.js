const serverless = require("serverless-http");
const app = require("../../app.js");

// Wrap the Express app with serverless-http
exports.handler = serverless(app);

