import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Helpful Link https://stackoverflow.com/questions/48151696/undefined-in-variable-using-react-componentdidmount

// Creates buttons based on how many pages were getting from API
const Footer = ({ currentPage, totalPages }) => {
	return (
		<div className='footer'>
			<ul className='footer__nav'>
				{currentPage > 1 && (
					<li className='footer__nav-item footer__nav-item--back'>
						<Link
							to={`?page=${parseInt(currentPage) - 1}`}
							className='btn btn__sign-in'
						>
							Page {parseInt(currentPage) - 1}
						</Link>
					</li>
				)}

				<li className='footer__nav-item footer__nav-item--movie'>
					The Movie DB
				</li>
				<li className='footer__nav-item footer__nav-item--copy'>
					&copy; | 2020 Richard Verbraak
				</li>

				{totalPages > currentPage && (
					<li className='footer__nav-item footer__nav-item--next'>
						<Link
							to={`?page=${parseInt(currentPage) + 1}`}
							className='btn btn__sign-in'
						>
							Page {parseInt(currentPage) + 1}
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentPage: state.currentPage,
		totalPages: state.totalPages,
	}
}

const ConnectedFooter = connect(mapStateToProps, undefined)(Footer)

export default ConnectedFooter
