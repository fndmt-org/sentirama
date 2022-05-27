import React, { Component } from 'react';
import { MoodSelector } from './moodSelector'
import { withRouter } from 'react-router-dom';

class MoodSelectorPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MoodSelector {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodSelectorPage);
