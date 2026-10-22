import React, { Component } from 'react';
import MoodSelectedList from './moodSelectedList'
import { withRouter } from 'react-router-dom';

class MoodSelectedListPage extends Component {
    render() {
        return (
            <MoodSelectedList {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodSelectedListPage);
