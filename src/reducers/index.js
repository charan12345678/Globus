import { combineReducers } from 'redux';
import alertreducer from './alertreducer';
import registerReducer from './registerReducer';

export default combineReducers({
   alertreducer,
   registerReducer
});