const path = require("path");
const SECRET_FILE = "modern-voice-381809-83aa5dfaf559.json";

function getJsonCredentialsPath() {
  return path.join(__dirname, "secret", SECRET_FILE);
}


module.exports = { getJsonCredentialsPath }