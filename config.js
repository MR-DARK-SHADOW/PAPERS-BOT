const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6VcnQT7C#oaz95GDk9f_L0D2wZNj4VnLZlIYnkbX00XPwBCrajl8",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'false',
};
