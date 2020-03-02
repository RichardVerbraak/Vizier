import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    
    // onClick = () => {
    //     this.props.pageChange(2)
    //     console.log(2)
    // }

    render() {
        return (            
            <div className="footer">
                <ul className="footer__nav">
                    <li className="footer__nav-item">The Movie DB</li>
                    <li className="footer__nav-item">&copy; | 2020 Richard Verbraak</li>
                    <li className="footer__nav-item">
                        <Link to="?page=2" className="btn btn__sign-in">Page 2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         pageChange: (pageNum) => dispatch(pageChange(pageNum))
//     }
// }

// const ConnectedFooter = connect(undefined, mapDispatchToProps)(Footer)

// export default ConnectedFooter