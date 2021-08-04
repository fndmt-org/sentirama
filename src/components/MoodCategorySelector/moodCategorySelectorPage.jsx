import React, { Fragment, Component } from 'react';
import {MoodCategorySelector} from './moodCategorySelector'
import { withRouter } from 'react-router-dom';

class MoodCategorySelectorPage extends Component {
    constructor(props) {
        super(props);
        this.need = props.history.location.state[0]
    }

    render() {
        return (
            <Fragment>
                <MoodCategorySelector need={this.need}/>
            </Fragment>
        )
    }
};

export default withRouter(MoodCategorySelectorPage);