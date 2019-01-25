import React, {Component} from 'react';
import './App.css';

class Subheader extends React.Component{
    render(){
        return(
            <div className="submenu">
                <span>Sysems Hub</span>
                <span>&nbsp;/&nbsp;</span>
                <span>Users&nbsp;</span>
                <span>/&nbsp;</span>
                <span>Marie Dean</span>
            </div>
        );
    }
}

export default Subheader;
