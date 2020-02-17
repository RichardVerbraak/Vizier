import React from 'react'

// Either display grid or flex with inputs wrapped in box

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="logo__box">
                    <div className="logo logo-login">Vizier</div>
                </div>

                <input className="login__input" type="text" placeholder="username" id="name"></input>            
                <input className="login__input" type="password" placeholder="password" id="password"></input>                  

                <button className="btn">Login</button>
                <p className="login__text">Don't have an account yet? <span className="login__text--signup">Sign up here</span></p>
            </div>
        )
    }
}