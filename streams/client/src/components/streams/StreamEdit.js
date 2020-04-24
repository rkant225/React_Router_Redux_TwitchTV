import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions/index';
import StreamForm from './Shared/StreamForm';

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.featchStream(this.props.match.params.id);
    }

    onSubmit = (formData) => {
        const id = this.props.match.params.id;
        let streamData = {
            userDetails : this.props.userDetails,
            title : formData.title,
            description : formData.description
        }
        this.props.editStreamAction(id,streamData);
    }

    render(){
        return(
            <div>
                <h3>Edit stream</h3>
                {this.props.stream && <StreamForm initialValues={{title : this.props.stream.title, description : this.props.stream.description}} onSubmit={this.onSubmit} />}
            </div>
        );
    }
}

const mapStateToProps = (state,props) =>{
    const id = props.match.params.id;
    return{
        stream : state.StreamsReducer[id],
        userDetails : state.GoogleOAuthReducer.userDetails
    }
}

export default withRouter(connect(mapStateToProps,{editStreamAction : Actions.editStream, featchStream : Actions.featchStream})(StreamEdit));





//////////////////////////////////////

// import React from 'react';
// import * as Actions from '../../Redux/actions';
// import {connect} from 'react-redux'


// class StreamCreate extends React.Component{

    


//     render(){
//         return(
//             <div>
//                 <h3>Create a new stream</h3>
//                 <StreamForm onSubmit={this.onSubmit} />
//             </div>
//         );
//     }
// }

// const mapStateToProps =(state) =>{
//     return{
//     }
// }



// export default connect(mapStateToProps,{createStreamAction : Actions.createStream})(StreamCreate);