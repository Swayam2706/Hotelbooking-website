const serverless = require("serverless-http");
const path = require("path");

// Ensure correct working directory for serverless environment
// In Netlify Functions, we need to resolve paths relative to the function location
const functionPath = __dirname;
const projectRoot = path.resolve(functionPath, "../..");

// Change to project root directory to ensure relative paths work
process.chdir(projectRoot);

let app;
try {
    app = require("../../app.js");
} catch (error) {
    console.error("Error loading app:", error);
    throw error;
}

// Wrap the Express app with serverless-http
exports.handler = serverless(app);

