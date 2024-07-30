// GIFTED TECH //
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Gifted~N2xbvvvH",
  HEROKU_API_TOKEN: process.env.HEROKU_API_TOKEN || "HRKU-0a1fe665-8a35-42e8-b7ad-761f25ffe195",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  KOYEB_API_TOKEN: process.env.KOYEB_API_TOKEN || "",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || "",
  DEPLOYMENT_PLATFORM: process.env.DEPLOYMENT_PLATFORM || "",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD || "false",
  AUTO_READ: process.env.AUTO_READ || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
   /*auto block only for 254 */
  AUTO_BLOCK: process.env.AUTO_BLOCK || "true",
  
  
  AUTO_REJECT_CALLS: process.env.AUTO_REJECT_CALLS || "false",
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || 'private',
  PREFIX: process.env.PREFIX || '$',
  PORT: process.env.PORT || "5000", /* Where App Will Listen On */
  OWNER_NAME: process.env.OWNER_NAME || "BOLTKUMA",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348031111297",
  WELCOME: process.env.WELCOME || "true",
  AUTO_VIEW_ONCE:process.env.AUTO_VIEW_ONCE || "false"
};


module.exports = config;
