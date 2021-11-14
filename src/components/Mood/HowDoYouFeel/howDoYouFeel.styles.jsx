import styled, { css } from 'styled-components';

import { ReactComponent as Met }  from '../../../assets/icons/44/smile.svg';
import { ReactComponent as UnMet }  from '../../../assets/icons/44/frown.svg';
import mediaQueries from '../../Styles/mediaQueries.styles';
import { iconSizes } from '../../Styles/iconSizes.styles';
import { IconButton } from '../../Styles/buttons.styles';

const HowDoYouFeelStyles = styled.form`
    ${({ theme }) => css`
        padding: ${theme.r075};
        background-color: ${theme.neutral050};
        align-items: center;
        display: flex;
        justify-content: space-around;
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
            /* max-height: ${theme.iconSizeThumb};
            max-width: ${theme.iconSizeThumb}; */
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

const MetIcon = styled(Met)`
    ${({ theme }) => css`
        /* background: ${theme.colorGoodMoodIcon}; */
    `}
`;

const UnMetIcon = styled(UnMet)`
    ${({ theme }) => css`
        /* background: ${theme.colorBadMoodIcon}; */
    `}
`;

export {
    HowDoYouFeelStyles,
    EmojiButton,
    EmojiSet,
    MetIcon,
    UnMetIcon,
}
