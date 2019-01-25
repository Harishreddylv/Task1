import React, {Component} from 'react';
import './App.css';
import Subheader from './Subheader';
import Subviewcomp from './Subviewcomp';


class Viewcomp extends React.Component{
    render(){
        return(
            <div className="subcontainer">
            <Subheader/>
            <Subviewcomp/>
            </div>

        );
    }
}

export default Viewcomp;