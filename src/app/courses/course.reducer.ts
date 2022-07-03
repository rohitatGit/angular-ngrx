import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { courseActions } from './action-types';
import { Course } from './model/course';

export interface CoursesState extends EntityState<Course> {} // this creates an entity for Courses that would store key as dictionary of numbers(Course Id's)

export const adapter = createEntityAdapter<Course>();

export const CoursesInitialState = adapter.getInitialState();

export const CoursesReducer = createReducer(
    CoursesInitialState,
    on(courseActions.ALLCoursesLoaded, (state, action) =>
        adapter.addAll(action.courses, state)
    )
);

export const { selectAll } = adapter.getSelectors();
