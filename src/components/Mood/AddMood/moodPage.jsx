import React, { Fragment, Component } from 'react';
import { AddMood, AddMoodRef } from './addMood';

class MoodPage extends Component {
    render() {
        return (
            <Fragment>
                <AddMoodRef />
            </Fragment>
        )
    }
};

export default MoodPage;
export { AddMood };
