import React, { Component } from 'react';
import MoodResults from './moodResults'
import { withRouter } from 'react-router-dom';

class MoodResultsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MoodResults {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodResultsPage);
