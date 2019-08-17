import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { GithubService, Repository } from '../../core/api/github.service';
import { ResponsiveLayoutService } from '../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {
  projects: Observable<Repository[]>;
  columnCount: Observable<number>;

  constructor(
    private githubService: GithubService,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    this.projects = this.githubService
      .getRepositories()
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));

    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
