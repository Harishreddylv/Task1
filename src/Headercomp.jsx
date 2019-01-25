import React, {Component} from 'react';
import './App.css';
import logo from './logotask.png';

class Headercomp extends React.Component{
    render(){
        return(
            <div className="mainHeader">
                <img src={logo} className="tasklogo" alt="tasklogo" />
                <ul className="nav_menus">
                    
                    <li>Application Settings</li>
                    <li>Users</li>
                    <li>Reports</li>
                    <li>About</li>
                </ul>
            </div>
        );
    }
}
export default Headercomp;
