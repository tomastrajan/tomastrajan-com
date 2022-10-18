import { Express, Request, Response } from 'express';
import fetch from 'node-fetch';

const API_URL_GITHUB = 'https://api.github.com';
const API_TOKEN_GITHUB = Buffer.from(
  `tomastrajan:${process.env.API_TOKEN_GITHUB}`
).toString('base64');

export function registerGithubHandlers(server: Express) {
  server.get('/api/github/repositories', getRepos);
}

function getRepos(req: Request, res: Response) {
  const options = { headers: { Authorization: `Basic ${API_TOKEN_GITHUB}` } };
  Promise.all([
    fetch(`${API_URL_GITHUB}/users/angular/repos?per_page=10`, options),
    fetch(`${API_URL_GITHUB}/users/tomastrajan/repos?per_page=100`, options),
    fetch(`${API_URL_GITHUB}/users/angular-extensions/repos`, options),
  ])
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((responses) =>
      responses.reduce((result, next) => result.concat(next), [])
    )
    .then((repos) => res.json(repos));
}
