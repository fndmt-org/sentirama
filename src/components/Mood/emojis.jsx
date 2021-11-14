import {
    EmojiButton,
    UnMetIcon,
    MetIcon,
} from './HowDoYouFeel/howDoYouFeel.styles';


const EMOJIS = {
    bad: UnMetIcon,
    good: MetIcon,
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
