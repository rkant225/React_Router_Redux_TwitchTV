import {GoogleOAuthActionType, StreamsActionType} from './ActionTypes'
import axios from 'axios';

// GoogleOAuth Actions
export const SignIn =(userDetails) =>{
    return {
        type : GoogleOAuthActionType.SIGN_IN,
        payload : userDetails
    }
}

export const SignOut =() =>{
    return {
        type : GoogleOAuthActionType.SIGN_OUT
    }
}

export const StartOAuth = () =>{
    return {
        type : GoogleOAuthActionType.START
    }
}


//  StreamActions

export const createStream = (formData) =>{
    return async (dispatch) =>{
        let response = await axios.post('http://localhost:3001/streams', formData);
        dispatch({type : StreamsActionType.CREATE_STREAM , payload : response.data })
    }
}

export const featchStreams = () =>{
    return async (dispatch) =>{
        let response = await axios.get('http://localhost:3001/streams');
        dispatch({type : StreamsActionType.FEATCH_STREAMS , payload : response.data })
    }
}

export const featchStream = (id) =>{
    return async (dispatch) =>{
        let response = await axios.get(`http://localhost:3001/streams/${id}`);
        dispatch({type : StreamsActionType.FEATCH_STREAM , payload : response.data })
    }
}

export const editStream = (id,formData) =>{
    return async (dispatch) =>{
        let response = await axios.put(`http://localhost:3001/streams/${id}`, formData);
        dispatch({type : StreamsActionType.EDIT_STREAM , payload : response.data })
    }
}

export const deleteStream = (id) =>{
    return async (dispatch) =>{
        let response = await axios.delete(`http://localhost:3001/streams/${id}`);
        dispatch({type : StreamsActionType.DELETE_STREAM , payload : id })
    }
}
