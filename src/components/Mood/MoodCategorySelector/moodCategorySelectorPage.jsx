import React, { Component } from 'react';
import {MoodCategorySelector} from './moodCategorySelector'
import { withRouter } from 'react-router-dom';

class MoodCategorySelectorPage extends Component {
    constructor(props) {
        super(props);
        this.need = props.history.location.state[0]
    }

    render() {
        return (
            <MoodCategorySelector need={this.need}/>
        )
    }
};

export default withRouter(MoodCategorySelectorPage);
