import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

// Helpful Link https://stackoverflow.com/questions/48151696/undefined-in-variable-using-react-componentdidmount
// TODO: Refactor

export class Footer extends React.Component {

    render() {
        return (            
            <div className="footer">
                <ul className="footer__nav">
                {this.props.currentPage > 1 && 
                    <li className="footer__nav-item footer__nav-item--back">
                        <Link
                            to={`?page=${parseInt(this.props.currentPage) - 1}`}
                            className="btn btn__sign-in"
                        >
                            Page {parseInt(this.props.currentPage) - 1}
                        </Link>                        
                </li>
                }
                
                    <li className="footer__nav-item footer__nav-item--movie">The Movie DB</li>
                    <li className="footer__nav-item footer__nav-item--copy">&copy; | 2020 Richard Verbraak</li>
                    <li className="footer__nav-item footer__nav-item--next">
                        <Link
                            to={`?page=${parseInt(this.props.currentPage) + 1}`}
                            className="btn btn__sign-in"
                        >
                            Page {parseInt(this.props.currentPage) + 1}
                        </Link>                        
                    </li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}

const ConnectedFooter= connect(mapStateToProps, undefined)(Footer)

export default ConnectedFooter