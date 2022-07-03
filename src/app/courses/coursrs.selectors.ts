import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './course.reducer';
import * as fromCourses from './course.reducer';

export const selectCoursrsState =
    createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
    selectCoursrsState,
    fromCourses.selectAll
);

export const selectBegineerCourses = createSelector(
    selectAllCourses,
    (courses) => courses.filter((course) => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    (courses) => courses.filter((course) => course.category === 'ADVANCED')
);

export const selectPromoTotal = createSelector(
    selectAllCourses,
    (courses) => courses.filter((course) => course.category === 'PROMO').length
);
