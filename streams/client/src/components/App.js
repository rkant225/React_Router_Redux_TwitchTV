import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header/Header';
import history from '../Router/history';

class App extends React.Component{
    render(){
        return(
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" exact render={()=> <StreamList/> }/>
                            <Route path="/streams/new" exact render={()=> <StreamCreate/> }/> 
                            <Route path="/streams/edit/:id" exact render={()=> <StreamEdit/> }/>
                            <Route path="/streams/delete/:id" exact render={()=> <StreamDelete/> }/> 
                            <Route path="/streams/:id" exact render={()=> <StreamShow/> }/> 
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;