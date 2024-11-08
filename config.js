const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Qv9B2ahS#-ARse4FhY1uh1HPdTsoYfXziPU16sYlRJFgQO__qeP4",
};
