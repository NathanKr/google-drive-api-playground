const docs = require('@googleapis/docs');
const {getJsonCredentialsPath} = require('./utils')

async function run(){
  const auth = new docs.auth.GoogleAuth({
    keyFilename: getJsonCredentialsPath(),
      // Scopes can be specified either as an array or as a single, space-delimited string.
      // this scope provide : See, edit, create, and delete all your Google Docs documents
      // check all scopes here https://developers.google.com/identity/protocols/oauth2/scopes
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