import {combineReducers} from 'redux'
import GoogleOAuthReducer from './GoogleOAuthReducer';
import StreamsReducer from './StreamsReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    GoogleOAuthReducer : GoogleOAuthReducer,
    form : formReducer,
    StreamsReducer : StreamsReducer
});