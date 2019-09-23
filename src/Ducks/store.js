import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';
import settingsReducer from './Reducers/settingsReducer';
import appReducer from './Reducers/appReducer';

const rootReducer = combineReducers({
    userReducer,
    settingsReducer,
    appReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
