import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../Redux/actions';
import Loader from '../UI/Loader'

class GoogleAuth extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.startOAuth();
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({ clientId : '377543589095-dkpdphppl987nnkk009khl61r1ajptu2.apps.googleusercontent.com', scope: 'email' })
                .then((data)=>{
                    this.auth = window.gapi.auth2.getAuthInstance(); //GAPI Instance
                    this.updateAuthStatus(this.auth.isSignedIn.get()); // Update login status for first time
                    this.auth.isSignedIn.listen(this.updateAuthStatus); // Add callback to isSignedIn event listener
                    window.auth = this.auth;
                })
        });
    }

    updateAuthStatus =(isSignedIn) =>{
        if(isSignedIn){
            const userName = this.auth.currentUser.get().getBasicProfile().getName();
            const imageURL = this.auth.currentUser.get().getBasicProfile().getImageUrl();
            const userId = this.auth.currentUser.get().getBasicProfile().getId();
            const userDetails = {
                userId : userId,
                userName : userName,
                imageURL : imageURL
            }
            this.props.signIn(userDetails); // Call Action creater to update the state so that other components can get new login status
        }
        if(!isSignedIn){
            this.props.signOut() // Call Action creater to update the state so that other components can get new login status
        }
    }

    handleLogIn = () =>{
        this.auth.signIn();  // signIn Button Event handler
    }

    handleLogOut = () =>{
        this.auth.signOut(); // signOut Button Event handler
    }

    renderLogOutButton = () =>{
        return (
            <div style= {{display : 'flex', alignItems : 'center', justifyContent : 'space-around', width : '330px'}}>
                <b> Logged In as : </b>
                <img src={this.props.userDetails.imageURL} style={{height : '40px', borderRadius : '200px'}}/>
                {this.props.userDetails.userName} 
                <button onClick={this.handleLogOut} className="ui red google button">
                    <i className="google icon"/>
                    Log out
                </button> 
            </div>
        );
    }

    renderLoginButton =()=>{
        return(
            <button onClick={this.handleLogIn} className="ui blue google button">
                <i className="google icon"/>
                Log in
            </button>
        );
    }

    render(){
        return(
            <div>
                {this.props.isLoading ? <Loader/>  : 
                this.props.isLoggedIn ? 
                this.renderLogOutButton() :
                this.renderLoginButton()}
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return{
        isLoggedIn : state.GoogleOAuthReducer.isLoggedIn,
        isLoading : state.GoogleOAuthReducer.isLoading,
        userDetails : state.GoogleOAuthReducer.userDetails
    }
}

export default connect(mapStateToProps, {startOAuth : Actions.StartOAuth, signIn : Actions.SignIn, signOut : Actions.SignOut})(GoogleAuth);