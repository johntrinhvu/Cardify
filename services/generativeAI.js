// services/generativeAI.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize GoogleGenerativeAI object
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Initialize the Generative Model
const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});

// Export the model to be used elsewhere in the application
module.exports = model;