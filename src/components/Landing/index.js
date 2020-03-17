import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import MessageList from './messageList';


const LandingPage = () => (
    <div>
        <h1>Your mood today</h1>
        <Landing />
        <MessageList />
    </div>
);

const INITIAL_STATE = {
    name: '',
    message: '',
    error: null,
};

class AddMessaageBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { name, message } = this.state;
        this.props.firebase
            .doAddMessage(name, message)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                // this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        console.log(this.props);

        const { name, message, error } = this.state;
        const isInvalid = message === '' || name === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Your name/nikname please"
                />
            <textarea
                name="message"
                placeholder="Your mood today"
                onChange={this.onChange}
                value={message}>
            </textarea>
                <button disabled={isInvalid} type="submit">add</button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const Landing = compose(
    withRouter,
    withFirebase,
)(AddMessaageBase);

export default LandingPage;
export { Landing };


