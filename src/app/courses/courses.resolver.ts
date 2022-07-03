import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, first, tap } from 'rxjs/operators';
import { courseActions } from './action-types';
import { Observable } from 'rxjs';
import { loadAllCourses } from './course.actions';

@Injectable()
export class CoursesResolver implements Resolve<any> {
    loading = false;
    constructor(private store: Store<any>) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true;
                    this.store.dispatch(loadAllCourses());
                }
            }),
            first(),
            finalize(() => (this.loading = false))
        );
    }
}
