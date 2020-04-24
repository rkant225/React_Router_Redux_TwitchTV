import React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.featchStreams();
    }

    render(){
        {console.log(this.props)}
        return(
            <div className="ui celled list">
                <h2>Streams</h2>
                {this.props.streams && this.props.streams.map(stream => {
                    return(
                        <div className="item" key={stream.id}>
                            {this.props.isLoggedIn && stream.userDetails.userId === this.props.currentUserId && <div className="right floated content">
                                <button className="ui button green"><Link to="/streams/edit">Edit</Link></button>
                                <button className="ui button red" onClick={() => this.props.deleteStream(stream.id)}>Delete</button>
                            </div>}
                            <i className="large middle aligned icon camera"/>
                            <div className="content">
                                {stream.title}
                                <div className="description">
                                    {stream.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
                {this.props.isLoggedIn && <div style={{textAlign : 'right'}}><Link className="ui button primary" to="/streams/new">Create new Stream</Link></div>}
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    return{
        streams : Object.values(state.StreamsReducer),
        isLoggedIn :  state.GoogleOAuthReducer.isLoggedIn,
        currentUserId :  state.GoogleOAuthReducer.isLoggedIn ? state.GoogleOAuthReducer.userDetails.userId : null
    }
}

export default connect(mapStateToProps,{featchStreams : Actions.featchStreams, deleteStream : Actions.deleteStream})(StreamList);