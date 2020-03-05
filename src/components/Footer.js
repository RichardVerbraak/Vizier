import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { pageChange } from '../actions/movies'

// Helpful Link https://stackoverflow.com/questions/48151696/undefined-in-variable-using-react-componentdidmount
// TODO: Refactor

export class Footer extends React.Component {
    state = {
        parsedPage: null
    }

    // Fetch page number in URL and parse it
    // Set state instead of componentWillMount
    componentDidMount() {
        const queryString = require('query-string')
        const parsedPage = queryString.parse(this.props.location.search).page
        // const pageNumber = parseInt(parsedPage)
        
        this.setState(() => {
            return {
                parsedPage: parsedPage
            }
        })
    }

    // When Link is clicked, update state 
    onClick = () => {
        this.props.pageChange(this.props.page + 1)
    }
    
    
    render() {
        console.log(this.state.parsedPage)
        return (            
            <div className="footer">
                <ul className="footer__nav">
                    <li className="footer__nav-item">The Movie DB</li>
                    <li className="footer__nav-item">&copy; | 2020 Richard Verbraak</li>
                    <li className="footer__nav-item">
                        <Link 
                            to={`?page=${this.props.page + 1}`} 
                            onClick={this.onClick} 
                            className="btn btn__sign-in"
                        >
                            Page {this.state.parsedPage ? parseInt(this.state.parsedPage) + 1 : 2}
                        </Link>
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