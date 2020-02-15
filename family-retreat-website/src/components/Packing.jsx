import React, { Component } from 'react';
import packing from '../assets/packing.png'

class Packing extends Component {
    render() {
        return (
            <div>
                <img src={packing} alt="Packing Image" className="section-title-center" />
            </div>
        );
    }
}

export default Packing;