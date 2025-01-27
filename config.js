const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "YKEWBB7J#MRlGuk2P73SzgUW_LK8TzTOYAgu4focKhd_BhRw7Jbk",
};
