import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, startWith } from 'rxjs/operators';

import { GithubService, Repository } from '../../core/api/github.service';
import { ResponsiveLayoutService } from '../../core/layout/responsive-layout.service';

const PLACEHOLDERS: Placeholder[] = new Array(10).fill({ isPlaceholder: true });

@Component({
  selector: 'tt-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {
  projects: Observable<Repository[] | Placeholder[]>;
  columnCount: Observable<number>;

  constructor(
    private githubService: GithubService,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.projects = this.githubService.getRepositories().pipe(
      startWith(PLACEHOLDERS),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}

interface Placeholder {
  isPlaceholder: boolean;
}
