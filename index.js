
// Example express application adding the parse-server module to expose Parse
// compatible API routes.

const express = require('express');
require('dotenv').config()
const {default: ParseServer, ParseGraphQLServer} = require('parse-server');
const path = require('path');
const args = process.argv || [];
const test = args.some(arg => arg.includes('jasmine'));

const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}
const config = {
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  mountGraphQL: true,
  liveQuery: {
    classNames: ['Event', 'Order', 'BoardList', 'ListCard', 'CardChecklist', 'CardChecklistItem', 'CardLabel'], // List of classes to support for query subscriptions
  },
  publicServerURL: 'https://strallop-server.nw.r.appspot.com/parse',
  appName: 'Strallop',
  emailAdapter: {
    module: 'parse-smtp-template',
    options: {
      port: 587,
      host: "smtp.gmail.com",
      user: "noreply.strallop@gmail.com",
      password  : process.env.noreplyPassword,
      fromAddress: 'noreply@strallop.com',
      multiTemplate: true,
      confirmTemplatePath: "/views/templates/passwordEmailTemplate.html",
      passwordTemplatePath: "views/templates/passwordEmailTemplate.html",

      // Custome options to your emails
      // You can add as much as you need
      passwordOptions: {
        subject: "Password recovery",
        body: "Custom pasword recovery email body",
        btn: "Recover your password"
        /* --EXTRA PARAMETERS--
        others: {
          extraParameter
        }
        */
      },
      confirmOptions: {
        subject: "E-mail confirmation",
        body: "Custom email confirmation body",
        btn: "confirm your email"
      },
    }
  }
};
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey


const app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
const mountPath = process.env.PARSE_MOUNT || '/parse';
if (!test) {
  const api = new ParseServer(config);
  const parseGraphQLServer = new ParseGraphQLServer(
    api,
    {
      graphQLPath: '/graphql',
      playgroundPath: '/playground'
    }
  );
  app.use(mountPath, api.app);
  parseGraphQLServer.applyGraphQL(app);
  parseGraphQLServer.applyPlayground(app);
}
// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

const port = process.env.PORT || 1337;
if (!test) {
  const httpServer = require('http').createServer(app);
  httpServer.listen(port, function () {
    console.log('parse-server-example running on port ' + port + '.');
  });
  // This will enable the Live Query real-time server
  ParseServer.createLiveQueryServer(httpServer);
}

module.exports = {
  app,
  config,
};
