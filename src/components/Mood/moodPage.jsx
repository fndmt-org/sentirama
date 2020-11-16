import React, { Fragment, Component } from 'react';
import MoodList from './moodList';
import MoodGrid from './moodGrid';
import { AddMood, AddModdRef } from './addMood';

class MoodPage extends Component {

    render() {
        return (
            <Fragment>
                <MoodGrid/>
                <AddModdRef/>
                <MoodList />
            </Fragment>
        )
    }

};

export default MoodPage;
export { AddMood };