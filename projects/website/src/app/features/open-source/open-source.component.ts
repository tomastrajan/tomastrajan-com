import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { GithubService, Repository } from '../../core/api/github.service';

@Component({
  selector: 'tt-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {
  projects: Observable<Repository[]>;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.projects = this.githubService.getRepositories().pipe(take(1));
  }
}
