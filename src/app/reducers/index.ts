import { routerReducer } from '@ngrx/router-store';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log('state before :', state);
        console.log('Action before :', action);

        return reducer(state, action); // return action reducer
    };
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer // Router Reducer for adding routing information in the store.(helpful in time travelling debugging)
};

//MetaReducers gets executed first(before action reducer) whenever any action dispatcheds
export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];
