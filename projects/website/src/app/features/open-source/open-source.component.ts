import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubService } from '../../core/api/github.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'tt-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {
  projects: Observable<any>;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.projects = this.githubService.getRepositories().pipe(take(1));
  }
}
