import {combineReducers} from 'redux';
import fetchpostdataReducer from './fetchpostdataReducer';
import fetchtitledataReducer from './fetchtitledatareducer';

export default combineReducers({
    fetchpostdataReducer,
    fetchtitledataReducer
});