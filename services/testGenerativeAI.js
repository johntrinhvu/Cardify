require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize GoogleGenerativeAI object with the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Initialize the Generative Model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const prompt = "Write a story about a magic backpack.";
model.generateContent(prompt)
    .then(result => {
        console.log(result.response.text());
    })
    .catch(error => {
        console.error("Error:", error);
    });

// curl \
// -H 'Content-Type: application/json' \
// -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
// -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDCIlom8alm7hMLhx5yQ9mUhYDVeDUTptw'