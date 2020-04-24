import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header/Header';

class App extends React.Component{
    render(){
        return(
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact> <StreamList/> </Route>
                        <Route path="/streams/new" exact> <StreamCreate/> </Route>
                        <Route path="/streams/edit" exact> <StreamEdit/> </Route>
                        <Route path="/streams/delete" exact> <StreamDelete/> </Route>
                        <Route path="/streams/show" exact> <StreamShow/> </Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;