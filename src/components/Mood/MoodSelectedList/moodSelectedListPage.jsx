import React, { Component } from 'react';
import MoodSelectedList from './moodSelectedList'
import { withRouter } from 'react-router-dom';

class MoodSelectedListPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MoodSelectedList {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodSelectedListPage);
