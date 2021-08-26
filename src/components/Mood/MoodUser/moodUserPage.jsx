import React, { Fragment, Component } from 'react';
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
            <Fragment>
                <MoodUserForm selectedMood={this.selectedMood}/>
            </Fragment>
        )
    }
};

export default withRouter(MoodUserPage);