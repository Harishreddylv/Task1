import React, {Component} from 'react';
import './App.css';
import logo from './logotask.png';
class Subviewright extends React.Component{
    render(){
        return(
            <div className="rightcontainer">
                <div className="detailview">
                    <div className="detailleft">
                    <div className="name alignrows">Marie Dean</div>
                    <div className="uname alignrows">
                        <span className="username userstyle">UserName</span><br/>
                        <span className ="usernamefill userfillstyle">marie.dean</span>
                    </div>
                    <div className="uemail alignrows">
                        <span className="usermail userstyle">Email</span><br/>
                        <span className ="usermailfill userfillstyle">marie.dean@example.com</span>
                    </div>   
                    <div className="dept alignrows">
                        <span className="userdept userstyle">Department</span><br/>
                        <span className ="userdeptfill userfillstyle">Affliate Team</span>
                    </div>  
                    <div className="role alignrows">
                        <span className="userrole userstyle">Role</span><br/>
                        <span className ="userrolefill userfillstyle">User</span>
                    </div> 
                    </div>
                    <div className="detailright">
                        <button className="btn-style">Edit User</button>
                    </div>
                    
                </div>
                <div className="footerview">
                    <div className="footerdiv">
                        <img src={logo} className="footlogo" alt="tasklogo" />
                        <p className="imgtxt">Manager</p>
                    </div>
                    <div className="footerdiv">
                        <img src={logo} className="footlogo" alt="tasklogo" />
                        <p className="imgtxt">Manager</p>
                    </div>
                    <div className="footerdiv">
                        <img src={logo} className="footlogo" alt="tasklogo" />
                        <p className="imgtxt">Manager</p>
                    </div>
                    <div className="footerdiv">
                        <img src={logo} className="footlogo" alt="tasklogo" />
                        <p className="imgtxt">Manager</p>
                    </div>
                    <div className="footerdiv">
                        <img src={logo} className="footlogo" alt="tasklogo" />
                        <p className="imgtxt">Manager</p>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Subviewright; 