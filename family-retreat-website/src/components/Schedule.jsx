import React, { Component } from 'react';
import schedule from '../assets/schedule.png'

class Schedule extends Component {
    render() {
        return (
            <div>
                <img src={schedule} alt="Schedule Image" className="section-title-center" />
            </div>
        );
    }
}

export default Schedule;