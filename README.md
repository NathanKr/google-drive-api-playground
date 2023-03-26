<h2>Motivation</h2>
google drive API can be usefull for few use cases:
<ul>
<li>cms</li>
<li>send info as file e.g. post for email list</li>
</ul>

Here i am doing POC for google drive API using service account. I am in interested only on read operation

<h2>Setup</h2>
<ol>

This setup is the same as for <a href='https://github.com/NathanKr/gmail-api-poc'>gmail-api-poc</a> but without Delegating domain-wide authority. Also same done for <a href='https://github.com/NathanKr/google-sheets-api-playground'>google-sheets-api-playground</a>

<li>Create a <a href='https://developers.google.com/workspace/guides/create-project'>google cloud project</a> to use Google Workspace APIs  e.g. google drive project name "Google Drive API Sample"</li>
<li>Enable google drive api for "Google Drive API Sample" project</li>
<li>Create credential - service account</li>
<li>Export the service credential file - here it is on secret directory but git ignored</li></ol>

<h2>Points of interests</h2>
<ul>
<li>the first few runs gave error regarding the api . may be it need some time after the project creation</li>
</ul>

<h2>Reference</h2>
<a href='https://github.com/googleapis/google-api-nodejs-client#google-apis-nodejs-client'>google-apis-nodejs-client</a>
