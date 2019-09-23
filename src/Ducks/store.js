import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';
import settingsReducer from './Reducers/settingsReducer';

const rootReducer = combineReducers({
    userReducer,
    settingsReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
