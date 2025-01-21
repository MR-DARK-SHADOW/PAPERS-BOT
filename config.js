const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SDZ1gTJR#bCQRpsi4V7IJ_2hk_8sjQ7c_oCzwun58nQMPo5sLDp4",
};
