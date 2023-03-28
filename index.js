// --- this file is based on https://developers.google.com/drive/api/guides/appdata#node.js

const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");
const fs = require("fs");
const {getJsonCredentialsPath} = require('./utils')

// --- Create a file in the application data folder

async function run() {
  const auth = new GoogleAuth({
    keyFilename: getJsonCredentialsPath(),
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
    resource: fileMetadata, // ---- where is resoure defined as argument to create ??
    media: media,
    fields: "id",
  });
  console.log("file:", file);
}

run();
