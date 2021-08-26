import {
    EmojiSelect,
} from './AddMood/addMood.styles';
import { ReactComponent as Bad }  from '../../assets/icons/frown.svg';
import { ReactComponent as Neutral }  from '../../assets/icons/meh.svg';
import { ReactComponent as Good }  from '../../assets/icons/smile.svg';

const EMOJIS = {
    bad: Bad,
    neutral: Neutral,
    good: Good,
}

const EmojiItem = ({value, onChange, active}) => {
    const Emoji = EMOJIS[value];
    const classActive = !!(active === value) && 'active';
    return (
        <EmojiSelect className={classActive} value={value}>
            <Emoji role="img" aria-label={value}/>
            <input className="emoji-radio" type="radio" name="emoji" onChange={onChange} value={value} />
        </EmojiSelect>
    )
}

export default EmojiItem;
export { EMOJIS }
