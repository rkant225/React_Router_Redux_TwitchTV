import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Actions from '../../Redux/actions';
import flv from 'flv.js';

class StreamShow extends React.Component{
    constructor(props){
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount(){
        this.props.featchStreamAction(this.props.id);
        this.flvPlayer = flv.createPlayer({
            type:'flv',
            url: `http://localhost:8000/live/${this.props.id}.flv`
        });

        this.flvPlayer.attachMediaElement(this.videoRef.current);
        this.flvPlayer.load();
    }

    componentWillUnmount(){
        console.log('I was un mounted!!!')
        this.flvPlayer.destroy();
    }

    render(){
        return(
            <div>
                <video ref={this.videoRef} style={{width : "50%", margin:'auto'}} controls={true}/>
                <h1>{this.props.stream && this.props.stream.title}</h1>
                <h4>{this.props.stream && this.props.stream.description}</h4>
            </div>
        );
    }
}

const mapStateoProps =(state,props)=>{
    return{
        id : props.match.params.id,
        stream : state.StreamsReducer[props.match.params.id]
    }
}

export default withRouter(connect(mapStateoProps,{featchStreamAction : Actions.featchStream})(StreamShow));