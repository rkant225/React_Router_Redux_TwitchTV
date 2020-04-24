
const INITIAL_STATE = {isLoggedIn : false, isLoading : false, userDetails : null}

const GoogleOAuthReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'START':
            return {
                ...state,
                isLoading : true,
                isLoggedIn : false,
                userDetails : null
            }
        case 'SIGN_IN':
            return {
                ...state,
                isLoading : false,
                isLoggedIn : true,
                userDetails : action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isLoading : false,
                isLoggedIn : false,
                userDetails : null
            }
        default:
            return state;
    }
}

export default GoogleOAuthReducer;