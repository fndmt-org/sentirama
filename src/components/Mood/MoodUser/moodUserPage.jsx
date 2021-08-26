import React, { Component } from 'react';
import MoodUserForm from './moodUserForm'
import { withRouter } from 'react-router-dom';

class MoodUserPage extends Component {
    constructor(props) {
        super(props);
        this.selectedMood = {
            mood: props.history.location.state.mood,
            color: props.history.location.state.color
        }
    }

    render() {
        return (
            <MoodUserForm selectedMood={this.selectedMood}/>
        )
    }
};

export default withRouter(MoodUserPage);
