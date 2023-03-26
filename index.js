const docs = require('@googleapis/docs');
const path = require("path");

const SECRET_FILE = "modern-voice-381809-83aa5dfaf559.json";
const jsonCredentialsPath = path.join(__dirname, "secret", SECRET_FILE);

async function run(){
  const auth = new docs.auth.GoogleAuth({
    keyFilename: jsonCredentialsPath,
      // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/documents']
  });
  const authClient = await auth.getClient();
  
  const client = await docs.docs({
      version: 'v1',
      auth: authClient
  });
  
  const createResponse = await client.documents.create({
      requestBody: {
        title: 'Your new document!',
      },
  });
  
  console.log(createResponse.data);  
}

run();