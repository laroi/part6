import { createStore, combineReducers } from 'redux';
import {reducer as anecdoteReducer} from './anecdoteReducer';
import {reducer as notificationReducer} from './notificationReducer';
export default combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
});



