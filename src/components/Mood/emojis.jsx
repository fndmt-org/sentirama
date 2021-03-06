import {
    EmojiSelect,
} from './addMood.styles';
import { ReactComponent as Bad }  from '../Styles/icons/frown.svg';
import { ReactComponent as Neutral }  from '../Styles/icons/meh.svg';
import { ReactComponent as Good }  from '../Styles/icons/smile.svg';

const EMOJIS = {
    bad: Bad,
    neutral: Neutral,
    good: Good,
}

const EmojiItem = ({value, onChange, active}) => {
    const Emoji = EMOJIS[value];
    const classActive = !!(active === value) && 'active';
    return (
        <EmojiSelect className={classActive}>
            <Emoji role="img" aria-label={value}/>
            <input className="emoji-radio" type="radio" name="emoji" onChange={onChange} value={value} />
        </EmojiSelect>
    )
}

export default EmojiItem;
export { EMOJIS }
