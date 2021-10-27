import React, { Component } from 'react';
import {MoodCategorySelector} from './moodCategorySelector'
import { withRouter } from 'react-router-dom';

class MoodCategorySelectorPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MoodCategorySelector {...this.props.location.state}/>
        )
    }
};

export default withRouter(MoodCategorySelectorPage);
