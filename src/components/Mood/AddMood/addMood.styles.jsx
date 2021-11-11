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
            height: ${theme.r1200};
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
            border-radius: ${theme.round};
            ${iconSizes.big}

            @media ${mediaQueries.xs} {
                ${iconSizes.extraBig}
            }

            @media ${mediaQueries.s} {
                ${iconSizes.big}
            }
            background: ${({value}) => value === 'good' ? theme.colorGoodMoodIcon : theme.colorBadMoodIcon};
        }

        .emoji-radio{
            display: none;
        }
    `}
`;

const EmojiSet = styled.div`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: ${theme.r300};

        @media ${mediaQueries.s} {
            flex-direction: row;
            gap: ${theme.r600};
        }
    `}
`;

export {
    AddMoodStyles,
    EmojiSelect,
    EmojiSet,
}
