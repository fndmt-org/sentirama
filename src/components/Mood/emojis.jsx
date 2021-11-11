import {
    EmojiSelect,
} from './AddMood/addMood.styles';
import { ReactComponent as Bad }  from '../../assets/icons/44/frown.svg';
import { ReactComponent as Neutral }  from '../../assets/icons/44/meh.svg';
import { ReactComponent as Good }  from '../../assets/icons/44/smile.svg';

const EMOJIS = {
    bad: Bad,
    neutral: Neutral,
    good: Good,
}

const EmojiItem = ({value, onChange}) => {
    const Emoji = EMOJIS[value];
    return (
        <EmojiSelect value={value}>
            <Emoji role="img" aria-label={value}/>
            <input className="emoji-radio" type="radio" name="emoji" onChange={onChange} value={value} />
        </EmojiSelect>
    )
}

export default EmojiItem;
export { EMOJIS }
