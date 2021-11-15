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
        background: ${value === 'good' ? theme.colorGoodMoodIcon : theme.colorBadMoodIcon};
        color: ${theme.neutral000};
        display: flex;
        margin: ${theme.r200};
        overflow: hidden;

        @media ${mediaQueries.s} {
            align-self: center;
            margin-left: 0;
            margin: ${theme.r400};
        }

        ${iconSizes.big}

        @media ${mediaQueries.xs} {
            ${iconSizes.extraBig}
            justify-content: center;
        }

        @media ${mediaQueries.s} {
            ${iconSizes.big}
        }
    `}
`;

const EmojiSet = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media ${mediaQueries.s} {
        flex-direction: row;
    }
`;

export {
    HowDoYouFeelStyles,
    EmojiButton,
    EmojiSet,
}
