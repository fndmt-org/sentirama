import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';

import { withFirebase } from '../Firebase';
import EmojiItem from './emojis';
import { getMoodsColor } from './moodsProps';

import Button from '../Styles/buttons.styles';
import {
    AddMoodStyles,
    AddMoodWrapper,
    EmojiSet,
    TitleFormStyles,
    SuggestedMoodsStyles,
} from './addMood.styles';

import * as ROUTES from '../../constants/routes';
import { ReactComponent as SentiramaLogo }  from '../Styles/icons/sentirama-logo.svg';

const MOODS = getMoodsColor();

const INITIAL_STATE = {
    name: '',
    message: '',
    emoji: '',
    category: '',
    set: '',
    error: null,
    style: {},
    moods: MOODS,
    filteredMoods: MOODS,
};

class AddMoodBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onSelect = this.onSelect.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onSubmit = event => {
        const { name, message, emoji, category, set } = this.state;
        const date = Date.now();
        this.props.firebase
            .doAddMood(name, message, emoji, date, category, set)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.props.history.push(ROUTES.MOOD_CATEGORY_SELECTOR, [event.target.value])
    };

    onSelect = (selectedMood) => {
        this.setState({
            'indexSelected': selectedMood?.index,
            'message': selectedMood?.name,
            'category': selectedMood?.category,
            'set': selectedMood?.set,
            'filteredMoods' : selectedMood?.category ? MOODS.filter(mood => mood.category === selectedMood.category) : MOODS,
        });
    };

    onReset = () => {
        this.setState({
            'category': '',
            'filteredMoods' : MOODS,
        });
    };

    render() {
        const {
            error,
            category,
        } = this.state;
        const emojis = [
            'good',
            'bad'
        ];

        return (
            <Fragment>
                <AddMoodWrapper>
                <AddMoodStyles ref={this.props.innerRef} onSubmit={this.onSubmit}>
                        <SentiramaLogo></SentiramaLogo>
                        <TitleFormStyles>
                        <FormattedMessage
                            id="yourMood.form.title"
                            description="Add your mood form title"
                            defaultMessage="¿Cómo te sientes hoy?"/>
                        </TitleFormStyles>
                        <EmojiSet>
                            {emojis.map(
                                item =>
                                    <EmojiItem
                                        active={this.state.emoji}
                                        value={item}
                                        key={item}
                                        onChange={this.onChange}/>
                            )}
                        </EmojiSet>
                        {error && <p>{error.message}</p>}
                    </AddMoodStyles>
                </AddMoodWrapper>
                    {category
                    ? <SuggestedMoodsMessage category={category} onReset={this.onReset}/>
                    : null}
            </Fragment>
        );
    }
}

const SuggestedMoodsMessage = ({category, onReset}) =>(
    <SuggestedMoodsStyles>
        Suggested moods related to "{category}" <Button onClick={() =>onReset()}>See all</Button>
    </SuggestedMoodsStyles>
)

const AddMood = compose(
    withRouter,
    withFirebase,
)(AddMoodBase);


const AddModdRef = React.forwardRef((props, ref) =>
    <AddMood innerRef={ref} {...props}
/>);


export { AddMood, AddModdRef };


