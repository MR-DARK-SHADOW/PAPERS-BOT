const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "o30UhQQR#BkqMxskM0rXG1pDg1sGx7lz6VHDZdPQVBVLc6VQVRFY",
};
