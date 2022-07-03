import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';

export const loadAllCourses = createAction(
    '[Courses Resolver] Load All Courses'
);

export const ALLCoursesLoaded = createAction(
    '[Courses Effects] ALLCoursesLoaded',
    props<{ courses: Course[] }>()
);
