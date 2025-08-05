const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sNA1ybxL#ZgA-Elz-tsKBnWodS7_WfUJFBqesXeIio3EuIk_VdZQ",
};
