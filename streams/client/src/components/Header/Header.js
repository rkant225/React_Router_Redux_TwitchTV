import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from '../../Auth/GoogleAuth';


const Header =(props)=>{
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Srteamer Home</Link>
           <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth/>
           </div> 
        </div>
    );
}

export default Header;