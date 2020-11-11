import React, { Fragment, Component } from 'react';
import MoodList from './moodList';
import { AddMood, AddModdRef } from './addMood';

class MoodPage extends Component {

    render() {
        return (
            <Fragment>
                <MoodList />
                <AddModdRef/>
            </Fragment>
        )
    }

};

export default MoodPage;
export { AddMood };
