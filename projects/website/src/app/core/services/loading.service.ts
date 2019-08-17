import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private trigger = new Subject<number>();

  isLoading: Observable<boolean>;

  constructor() {
    this.isLoading = this.trigger.pipe(
      scan((result, next) => {
        result += next;
        result = result < 0 ? 0 : result;
        return result;
      }, 0),
      map(value => value > 0)
    );
  }

  start() {
    this.trigger.next(1);
  }

  stop() {
    this.trigger.next(-1);
  }
}
