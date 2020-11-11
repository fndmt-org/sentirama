import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';

import { withFirebase } from '../Firebase';
import EmojiItem from './emojis';
import moodsList from './moods.data';
import Button from '../Styles/buttons.styles';
import {
    EmojiSet,
    Input,
    AddMoodCard,
    TypeaheadMenu,
    TypeaheadMenuItem,
    TypeaheadStyled,
} from './addMood.styles';
import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';

const INITIAL_STATE = {
    name: '',
    message: '',
    emoji: '',
    error: null,
    style: {},
};


class AddMoodBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { name, message, emoji } = this.state;
        const date = Date.now();
        this.props.firebase
            .doAddMood(name, message, emoji, date)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSelect = selectedMood => {
        this.setState({ 'message': selectedMood.join('') });
    };

    render() {

        const { name, message, emoji, error } = this.state;
        const isInvalid = message === '' || name === '' || emoji === '';
        const emojis = ['bad','neutral', 'good'];
        return (
            <AddMoodCard ref={this.props.innerRef}>
                <form onSubmit={this.onSubmit}>
                    <h4>
                    <FormattedMessage
                        id="yourMood.form.title"
                        defaultMessage={'Your mood today:'}/>
                    </h4>
                    <FormattedMessage
                        id="yourMood.form.placeholder.name"
                        defaultMessage={'Your name/nikname'}>
                            { msg =>
                                <Input
                                    name="name"
                                    value={name}
                                    onChange={this.onChange}
                                    type="text"
                                    placeholder={msg}
                                />
                            }
                    </FormattedMessage>
                    <FormattedMessage
                        id="yourMood.form.placeholder.mood"
                        defaultMessage={'Your mood in one word'}>
                            { msg =>
                                <TypeaheadStyled
                                    id="select-mood"
                                    name="message"
                                    // renderInput={(inputProps) => (
                                    //     <Input {...inputProps} />
                                    // )}
                                    // renderMenuItemChildren={(option, props, index) => {
                                    //     return <span index={index}>{option}</span>
                                    // }}
                                    // renderMenu={(results, menuProps) => (
                                    //     <TypeaheadMenu {...menuProps}>
                                    //         {results.map((result, index) => (
                                    //         <TypeaheadMenuItem key={index} option={result} position={index}>
                                    //             {result.label}
                                    //         </TypeaheadMenuItem>
                                    //         ))}
                                    //     </TypeaheadMenu>
                                    // )}
                                    options={moodsList}
                                    placeholder={msg}
                                    onChange={(selectedMood) => this.onSelect(selectedMood)}
                                />
                            }
                    </FormattedMessage>
                    <label>
                        <FormattedMessage
                            id="yourMood.form.emoji"
                            defaultMessage={'Select a face:'}/>
                    </label>
                    <EmojiSet>
                        {emojis.map(
                            item =>
                            <EmojiItem
                                active={this.state.emoji}
                                value={item}
                                key={item}
                                onChange={this.onChange}/>
                            )
                        }
                    </EmojiSet>
                    <Button disabled={isInvalid} type="submit"><Arrow /></Button>
                    {error && <p>{error.message}</p>}
                </form>
            </AddMoodCard>
        );
    }
}

const AddMood = compose(
    withRouter,
    withFirebase,
)(AddMoodBase);


const AddModdRef = React.forwardRef((props, ref) =>
    <AddMood innerRef={ref} {...props}
/>);


export { AddMood, AddModdRef };


