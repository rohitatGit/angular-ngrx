import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { concatMap, switchMap, map } from 'rxjs/operators';
import { courseActions } from './action-types';
import { CoursesHttpService } from './services/courses-http.service';

@Injectable()
export class CoursesEffect {
    constructor(
        private action$: Actions,
        private coursesService: CoursesHttpService
    ) {}

    loadAllCourses = createEffect(() =>
        this.action$.pipe(
            ofType(courseActions.loadAllCourses),
            switchMap((action) => this.coursesService.findAllCourses()),
            map((courses) => courseActions.ALLCoursesLoaded({ courses }))
        )
    );
}
