import { combineReducers } from 'redux';
import {reducer as anecdoteReducer} from './anecdoteReducer';
import {reducer as notificationReducer} from './notificationReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
});



