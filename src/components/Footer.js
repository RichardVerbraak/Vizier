import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {pageChange} from '../actions/movies'

export class Footer extends React.Component {
    state = {
        page: 1
    }

    onClick = () => {
        this.props.history.push(`?page=${this.state.page + 1}`)
        this.setState(() => {
            return {
                page: this.state.page + 1
            }
        })    
    }

    render() {
        console.log(this.props)
        return (            
            <div className="footer">
                <ul className="footer__nav">
                    <li className="footer__nav-item">The Movie DB</li>
                    <li className="footer__nav-item">&copy; | 2020 Richard Verbraak</li>
                    <li className="footer__nav-item">
                        <a onClick={this.onClick} className="btn btn__sign-in">Page {this.state.page + 1}</a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageChange: (pageNum) => dispatch(pageChange(pageNum))
    }
}

const ConnectedFooter = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default ConnectedFooter