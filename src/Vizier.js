import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import Category from './components/Category';
import Movies from './components/Movies';
import Footer from './components/Footer'

export default class Vizier extends React.Component {
    render() {
        return (
            <>
                <Navigation></Navigation>
                <Category></Category>
                <Movies></Movies>
                <Footer></Footer>
            </>
        )
    }
}