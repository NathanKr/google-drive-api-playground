// --- this file is based on https://developers.google.com/drive/api/guides/appdata#node.js

const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SECRET_FILE = "modern-voice-381809-83aa5dfaf559.json";
const jsonCredentialsPath = path.join(__dirname, "secret", SECRET_FILE);


async function run(){
    const auth = new GoogleAuth({
        keyFilename: jsonCredentialsPath,
        scopes: "https://www.googleapis.com/auth/drive.appdata",
      });
      const drive = google.drive({ version: "v3", auth });
      const fileMetadata = {
        name: "config.json",
        parents: ["appDataFolder"],
      };
      const media = {
        mimeType: "application/json",
        body: fs.createReadStream("files/config.json"),
      };
      const file = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id",
      });
      console.log("file:", file);
}


run();