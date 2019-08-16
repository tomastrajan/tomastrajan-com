import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL_GITHUB = 'https://api.github.com';

const REPO_NAMES = [
  'angular/angular',
  'angular/angular-cli',
  'angular-ngrx-material-starter',
  'angular-extensions/model',
  'angular-extensions/elements',
  'medium-enhanced-stats',
  'ngx-model',
  'angular-js-es6-testing-example',
  'angular-model-pattern-example',
  'component-pattern-for-angular-js-1-x',
  'react-typescript-webpack',
  'grunt-ngsrc'
];

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    return combineLatest([
      this.http.get(`${API_URL_GITHUB}/users/angular/repos?per_page=100`),
      this.http.get(`${API_URL_GITHUB}/users/tomastrajan/repos?per_page=100`),
      this.http.get(`${API_URL_GITHUB}/users/angular-extensions/repos?per_page=100`)
    ]).pipe(
      map((allRepos: any[]) => allRepos.flat()),
      map((repos: Repository[]) => {
        const repoItems = repos.map(this.buildRepositoryItem);
        return REPO_NAMES.map(name =>
          repoItems.find(repo => repo.name === name)
        );
      })
    );
  }

  private buildRepositoryItem(item: any): Repository {
    return {
      id: item.id,
      name: item.full_name.replace('tomastrajan/', ''),
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
