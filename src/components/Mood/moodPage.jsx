import React, { Fragment, Component } from 'react';
import MoodList from './moodList';
import { AddMood, AddModdRef } from './addMood';

class MoodPage extends Component {

    render() {
        return (
            <Fragment>
                <AddModdRef />
                {/* <MoodList /> */}
            </Fragment>
        )
    }

};

export default MoodPage;
export { AddMood };
