import 'zone.js/dist/zone-node';
import * as express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { join } from 'path';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

enableProdMode();
dotenv.config();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const API_URL_GITHUB = 'https://api.github.com';
const API_TOKEN_GITHUB = Buffer.from(
  `tomastrajan:${process.env.API_TOKEN_GITHUB}`
).toString('base64');

const app = express();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
app.get('/api/github/repositories', async (req, res) => {
  const options = { headers: { Authorization: `Basic ${API_TOKEN_GITHUB}` } };
  Promise.all([
    fetch(`${API_URL_GITHUB}/users/angular/repos?per_page=50`, options),
    fetch(`${API_URL_GITHUB}/users/tomastrajan/repos?per_page=50`, options),
    fetch(`${API_URL_GITHUB}/users/angular-extensions/repos`, options)
  ])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(responses =>
      responses.reduce((result, next) => result.concat(next), [])
    )
    .then(repos => res.json(repos));
});

// Serve static files from /browser
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y'
  })
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
