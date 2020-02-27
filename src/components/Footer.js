import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul className="footer__nav">
                    <li className="footer__nav-item">The Movie DB</li>
                    <li className="footer__nav-item">&copy; | 2020 Richard Verbraak</li>
                    <li className="footer__nav-item">
                        <a href='#' className="btn btn__sign-in">Page 2</a>
                    </li>
                </ul>
            </div>
        )
    }
}