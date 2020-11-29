import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';
import { svgSizes } from '../Styles/svgSizes.styles';

const AddMoodWrapper = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${theme.neutralOpacity900 };
        display: flex;
        justify-content: center;
    `}
`;

const AddMoodStyles = styled.form`
    ${({ theme }) => css`
        background-color: ${theme.neutral050 };
        padding: ${theme.r200};
        align-items: center;
        display: flex;
        flex-flow: column;
        text-align: center;
        ${responsiveFonts.BtoL}

        @media ${mediaQueries.s} {
            flex-flow: row;
            flex-wrap: wrap;
            text-align: left;
        }

        h4 {
            font-weight: ${theme.fontBold};
            margin-right: ${theme.r100};
            margin-bottom: ${theme.r100};

            width: 100%;

            @media ${mediaQueries.s} {
                width: inherit;
                margin-bottom: 0;
            }
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
            margin-right: ${theme.r100 };
            color: ${theme.neutral600 };
        }
    `}
`;

const EmojiSelect = styled.label`
    display: flex;
    position: relative;
    svg {
        ${svgSizes.big}
        ${(props) => props.className === 'active' && `fill: ${props.theme.colorMain}`}
    }
    .emoji-radio{
        display: none;
    }
`;

const EmojiSet = styled.div`
    display: flex;
`;

export {
    AddMoodStyles,
    AddMoodWrapper,
    EmojiSelect,
    EmojiSet,
}
