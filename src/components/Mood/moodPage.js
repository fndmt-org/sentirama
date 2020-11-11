import React, { Fragment, Component } from 'react';
import MoodList from './moodList';
import { AddMood, AddModdRef } from './addMood';

class MoodPage extends Component {

    constructor(props) {
        super(props);
        this.addMoodRef = React.createRef();
        this.state = { height: 0 };
    }

    componentDidMount() {
        this.setState(
            {
                height: `${this.addMoodRef.current.offsetHeight}px`,
            }
        );
    }


    render() {
        return (
            <Fragment>
                <MoodList
                    addHeight={this.state.height}
                />
                <AddModdRef
                    ref={this.addMoodRef}
                />
            </Fragment>
        )
    }

};

export default MoodPage;
export { AddMood };
