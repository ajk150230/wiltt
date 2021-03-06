










import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getSession } from "../../Redux/userReducer";
import Login from './Login'
import Profile from '../../Components/Profile'

 class Account extends Component {
    componentDidMount(){
        this.props.getSession()
    }

    render() {
        return (
            <div>
                {this.props.user.user_id? <Profile/>: <Login user_id={this.props.user.user_id}/>}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ user: reduxState.user });

export default connect(mapStateToProps, { getSession })(Account);