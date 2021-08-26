import React, { Fragment, Component } from 'react';
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
            <Fragment>
                <MoodResults usernameMood={this.usernameMood}/>
            </Fragment>
        )
    }
};

export default withRouter(MoodResultsPage);