/**
 * Created by USER on 25/11/2017.
 */
import React from 'react';
import './TextClasses.css'
import './BrandHeader.css'

export default class Brand extends React.Component {
    render() {
        return <header id="header">
            <div className="container">
                <h1 className="brand">
                    BeatStreet
                </h1>
            </div>
        </header>;
    }
}