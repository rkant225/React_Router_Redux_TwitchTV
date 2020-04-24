import {StreamsActionType} from '../actions/ActionTypes'

const StreamsReducer = (state={},action) =>{
    switch(action.type){
        case StreamsActionType.FEATCH_STREAM:
        case StreamsActionType.CREATE_STREAM:
        case StreamsActionType.EDIT_STREAM:
            return{
                ...state,
                [action.payload.id] : action.payload
            }
        case StreamsActionType.FEATCH_STREAMS:
            const newState = action.payload.reduce((acc,stream)=>{
                return {...acc, [stream.id] : stream }
            },{});
            return {...state, ...newState}
        case StreamsActionType.DELETE_STREAM:
            const copyState = {...state};
            delete copyState[action.payload]
            return copyState;
        
        default:
            return state;
    }
}

export default StreamsReducer;