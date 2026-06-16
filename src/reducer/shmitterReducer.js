/*
type State = {
    user: {
        name: string,
        avatar: string,
    },
    stats: {
        followers: number,
        following: number,
    },
}

 */

import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userAction.js";
import {CHANGE_STATS} from "../actions/statsAction.js";
import {combineReducers} from "redux";

const initialUserState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
};

const initialStatsState = {
    followers: 0,
    following: 0,
};

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name};
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar};
        default:
            return state;
    }
}

export const statsReducer = (state = initialStatsState, action) => {
    switch (action.type) {
        case CHANGE_STATS: {
            const res = state[action.payload.statsType] + action.payload.sum;
            return {...state, [action.payload.statsType]: res < 0 ? 0 : res};

        }
        default:
            return state;
    }
}

export const shmitterReducer = combineReducers({
    user: userReducer,
    stats: statsReducer,
})