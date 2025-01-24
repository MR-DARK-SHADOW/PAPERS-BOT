const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TTonSQza#eSdzbl1gI8TWs2jy0F_gJBnIgRkqxh7I4p4Fs21DmxM",
};
