import React, {Component} from 'react';
import './App.css';
import leftimg from './reactlogo.png';

class Subviewleft extends React.Component{
    render(){
        return(
            <div className="leftcontainer">
                <img src={leftimg} className="imgclass"/>
            </div>
        );
    }
}

export default Subviewleft;