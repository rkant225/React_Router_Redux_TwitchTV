import React from 'react';
import Modal from '../../UI/Modal';
import history from '../../Router/history';
import {withRouter} from 'react-router-dom';
import * as Actions from '../../Redux/actions';
import {connect} from 'react-redux';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.featchStreamAction(this.props.id);
    }
    handleCancle =() =>{
        history.push('/');
    }

    handleDelete =()=>{
        this.props.deleteStreamAction(this.props.id);
    }

    modelActions = () =>{
        return(
            <React.Fragment>
                <button onClick={this.handleCancle} className="ui button">Cancle</button>
                <button onClick={this.handleDelete} className="ui red button">Delete</button>
            </React.Fragment>
        );
    }

    render(){
        return(
            <div>
                {this.props.stream &&  <Modal 
                    title={"Delete Stream"}
                    content={`Are you sure that you want to delete your stream having title of "${this.props.stream.title}"?`}
                    onCancle={this.handleCancle}
                    actions={this.modelActions()}
                 />}
            </div>
        );
    }
}

const mapStateToProps = (state,props) =>{
    return{
        id : props.match.params.id,
        stream : state.StreamsReducer[props.match.params.id]
    }
}

export default withRouter(connect(mapStateToProps,{deleteStreamAction : Actions.deleteStream, featchStreamAction : Actions.featchStream})(StreamDelete));
