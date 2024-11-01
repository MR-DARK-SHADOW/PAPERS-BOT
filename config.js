const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KIFACZwZ#6Nwm__7jiB4k96AK7zlf2ia2bzAsIGdAFcMKECzVv-0",
};
