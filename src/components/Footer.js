import React from 'react'

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
                        <a className="btn btn__sign-in">Page 2</a>
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