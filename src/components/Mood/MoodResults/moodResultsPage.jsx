import React, { Component } from 'react';
import MoodResults from './moodResults'
import { withRouter } from 'react-router-dom';

class MoodResultsPage extends Component {
    constructor(props) {
        super(props);
        this.usernameMood = {
            mood: props.history.location.state.mood,
            color: props.history.location.state.color,
            username: props.history.location.state.username
        }
    }

    render() {
        return (
            <MoodResults usernameMood={this.usernameMood}/>
        )
    }
};

export default withRouter(MoodResultsPage);
