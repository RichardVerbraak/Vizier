import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {pageChange} from '../actions/movies'

export class Footer extends React.Component {      
    
    render() {
        return (            
            <div className="footer">
                <ul className="footer__nav">
                    <li className="footer__nav-item">The Movie DB</li>
                    <li className="footer__nav-item">&copy; | 2020 Richard Verbraak</li>
                    <li className="footer__nav-item">
                        <Link to='?page=2' className="btn btn__sign-in">Page 2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageChange: (pageNum) => dispatch(pageChange(pageNum))
    }
}

const ConnectedFooter = connect(undefined, mapDispatchToProps)(Footer)

export default ConnectedFooter