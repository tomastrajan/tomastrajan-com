import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.github.com';
const REPO_NAMES = [
  'angular-ngrx-material-starter',
  'elements',
  'model',
  'angular-js-es6-testing-example',
  'medium-enhanced-stats',
  'angular-model-pattern-example',
  'ngx-model',
  'react-typescript-webpack',
  'component-pattern-for-angular-js-1-x'
];

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repository> {
    return combineLatest([
      this.http.get(`${API_URL}/users/tomastrajan/repos`),
      this.http.get(`${API_URL}/users/angular-extensions/repos`)
    ]).pipe(
      map((allRepos: any[]) => allRepos.flat()),
      map((repos: any) =>
        repos
          .map(this.dtoToModelRepository)
          .filter(repo => REPO_NAMES.some(name => repo.name.includes(name)))
          .sort((a: Repository, b: Repository) => b.stargazers - a.stargazers)
      )
    );
  }

  private dtoToModelRepository(item: any): Repository {
    return {
      id: item.id,
      name: item.full_name,
      description: item.description,

      url: item.html_url,
      clone: item.clone_url,
      homepage: item.homepage,

      stargazers: item.stargazers_count,
      forks: item.forks_count,
      owner: {
        id: item.owner.id,
        type: item.owner.type,
        name: item.owner.login,

        url: item.owner.html_url,
        avatar: item.owner.avatar_url
      }
    };
  }
}

export interface Repository {
  id: string;
  name: string;
  description: string;

  url: string;
  clone: string;
  homepage: string;

  stargazers: number;
  forks: number;
  owner: Owner;
}

export interface Owner {
  id: string;
  type: string;
  name: string;

  url: string;
  avatar: string;
}
