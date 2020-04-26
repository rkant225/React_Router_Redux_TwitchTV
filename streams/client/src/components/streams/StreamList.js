import React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.featchStreams();
    }

    render(){
        return(
            <div className="ui celled list">
                <h2>Streams</h2>
                {this.props.streams && this.props.streams.map(stream => {
                    return(
                        <div className="item" key={stream.id}>
                            {this.props.isLoggedIn && stream.userDetails.userId === this.props.currentUserId && <div className="right floated content">
                                <Link to={`/streams/edit/${stream.id}`} className="ui button green">Edit</Link>
                                <Link to={`/streams/delete/${stream.id}`} className="ui button red">Delete</Link>
                            </div>}
                            <i className="large middle aligned icon camera"/>
                            <div className="content">
                                <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
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