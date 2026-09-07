import React, { Component } from 'react';
import MoodResults from './moodResults'
import { withRouter } from 'react-router-dom';

class MoodResultsPage extends Component {
    render() {
        return (
            <MoodResults {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodResultsPage);
