const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "siVETSYY#f4J_CzT8eYYxzVUCVNC0i9zQF5ihovDvskUno3X3qIc",
};
