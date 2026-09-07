import React, { Component } from 'react';
import MoodUserForm from './moodUserForm'
import { withRouter } from 'react-router-dom';

class MoodUserPage extends Component {
    render() {
        return (
            <MoodUserForm {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodUserPage);
