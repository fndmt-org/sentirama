import {
    EmojiButton,
} from './HowDoYouFeel/howDoYouFeel.styles';
import { ReactComponent as Met }  from '../../assets/icons/44/smile.svg';
import { ReactComponent as UnMet }  from '../../assets/icons/44/frown.svg';

const EMOJIS = {
    unmet: UnMet,
    met: Met,
}

const EmojiItem = ({value, onClick}) => {
    const Emoji = EMOJIS[value];
    return (
        <EmojiButton value={value} onClick={()=> onClick(value)}>
            <Emoji role="img" aria-label={value}/>
        </EmojiButton>
    )
}

export default EmojiItem;
export { EMOJIS }
