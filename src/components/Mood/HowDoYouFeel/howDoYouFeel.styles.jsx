import styled, { css } from 'styled-components';

import mediaQueries from '../../Styles/mediaQueries.styles';
import { iconSizes } from '../../Styles/iconSizes.styles';
import { IconButton } from '../../Styles/buttons.styles';

const HowDoYouFeelStyles = styled.form`
    ${({ theme }) => css`
        padding: ${theme.r075};
        background-color: ${theme.neutral050};
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        text-align: center;
        height: 100%;
        width: 100%;

        @media ${mediaQueries.s} {
            flex-direction: row;
        }
    `}
`;

const EmojiButton = styled(IconButton)`
    ${({ theme, value }) => css`
        background: none;
        background: ${value === 'met' ? theme.colorMetMoodIcon : theme.colorUnMetMoodIcon};
        color: ${theme.neutral900};
        display: flex;
        font-size: ${theme.iconsSizeButtonBig};
        justify-content: center;
        margin: ${theme.r200};
        overflow: hidden;
        ${iconSizes.FW}

        max-width: ${theme.r1200};
    `}
`;

const EmojiSet = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${({ theme }) => theme.r200};

    @media ${mediaQueries.s} {
        flex-direction: row;
    }
`;

export {
    HowDoYouFeelStyles,
    EmojiButton,
    EmojiSet,
}
