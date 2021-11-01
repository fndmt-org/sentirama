import styled, { css } from 'styled-components';

import responsiveFonts from '../../Styles/responsiveFonts.styles';
import mediaQueries from '../../Styles/mediaQueries.styles';
import { iconSizes } from '../../Styles/iconSizes.styles';

const AddMoodStyles = styled.form`
    ${({ theme }) => css`
        padding: ${theme.r075};
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        width: 100vw;
        ${responsiveFonts.BtoL}

        @media ${mediaQueries.s} {
            flex-direction: row;
            flex-wrap: wrap;
            text-align: left;
            width: inherit;
            height: 120px;
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
            color: ${theme.neutral600 };
        }
    `}
`;

const EmojiSelect = styled.label`
    ${({ theme }) => css`
        display: flex;
        svg {
            box-shadow: ${theme.boxShadowBottom2};
            fill: ${theme.neutral000};
            border-radius: 50%;
            ${iconSizes.big}
            
            @media ${mediaQueries.xs} {
                border-radius: 94px;
                ${iconSizes.extraBig}
            }
            
            @media ${mediaQueries.s} {
                border-radius: 50%;
                ${iconSizes.big}
            }

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
    flex-direction: column;
    gap: 27px;
    
    @media ${mediaQueries.s} {
        flex-direction: row;
        gap: 58px;
    }
`;

export {
    AddMoodStyles,
    EmojiSelect,
    EmojiSet,
}
