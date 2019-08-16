import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share, shareReplay, take, takeUntil } from 'rxjs/operators';

import { GithubService, Repository } from '../../core/api/github.service';

@Component({
  selector: 'tt-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  projects: Observable<Repository[]>;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.projects = this.githubService.getRepositories().pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
