import React from 'react'
import { Link } from 'react-router-dom'

// Either display grid or flex with inputs wrapped in box
// TODO: Fix the space between the logo and the top of the page (pseudo elements are being ignored)

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="logo__box">
                    <div className="logo logo-login">Vizier</div>
                </div>

                <div className="login__input-group">
                    <input className="login__input" type="text" placeholder="username" id="name"></input>            
                    <input className="login__input" type="password" placeholder="password" id="password"></input>
                </div>                  

                <Link to="/" className="btn btn__login">Login</Link>
                <p className="login__text">Don't have an account yet? <span className="login__text--signup">Sign up here</span></p>
            </div>
        )
    }
}