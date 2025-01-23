const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IqExhC7Y#TNpgf51fn5favT8gXXZjtP7h32AqTkEPRX6-hvt12iQ",
};
