import styled, { css } from 'styled-components';

import responsiveFonts from '../../Styles/responsiveFonts.styles';
import mediaQueries from '../../Styles/mediaQueries.styles';
import { iconSizes } from '../../Styles/iconSizes.styles';

const AddMoodStyles = styled.form`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        flex-flow: column;
        text-align: center;
        ${responsiveFonts.BtoL}

        @media ${mediaQueries.s} {
            flex-flow: row;
            flex-wrap: wrap;
            text-align: left;
        }

        button {
            @media ${mediaQueries.xs} {
                width: ${theme.r2000};
            }
            @media ${mediaQueries.s} {
                margin-left: ${theme.r100};
            }
        }
        label {
            margin-right: ${theme.r400 };
            color: ${theme.neutral600 };
        }
    `}
`;

const EmojiSelect = styled.label`
    ${({ theme }) => css`
        display: flex;
        svg {
            border-radius: 50%;
            box-shadow: ${theme.boxShadowBottom2};
            fill: ${theme.neutral000};
            ${iconSizes.big}
            ${(props) => props.className === 'active' && `fill: ${props.theme.colorMain}`}
            ${(props) => {
    return props.value === 'good'
        ? `background: ${props.theme.colorGoodMoodIcon}`
        : `background: ${props.theme.colorBadMoodIcon}`
}}
        }
        .emoji-radio{
            display: none;
        }
    `}
`;

const EmojiSet = styled.div`
    align-items: center;
    display: flex;
`;

export {
    AddMoodStyles,
    EmojiSelect,
    EmojiSet,
}
