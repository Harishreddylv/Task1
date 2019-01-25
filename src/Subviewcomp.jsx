import React, {Component} from 'react';
import './App.css';
import Subviewleft from './Subviewleft';
import Subviewright from './Subviewright';

class Subviewcomp extends React.Component{
    render(){
        return(
            <div className="subviews">
                <Subviewleft/>
                <Subviewright/>
            </div>
        );
    }
}
export default Subviewcomp;