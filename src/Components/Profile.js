import React, { Component } from 'react'
import { connect } from "react-redux";
import { getSession } from "../Redux/userReducer";
import { Redirect } from "react-router-dom";
class Profile extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getSession()
    }
    render() {
        const { firstname, lastname, address} = this.props.user
        console.log(this.props)
        if (!this.props.user.user_id) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <ul>
                    <li>{firstname}</li>
                    <li>{lastname}</li>
                    <li>{address}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { getSession })(Profile); 