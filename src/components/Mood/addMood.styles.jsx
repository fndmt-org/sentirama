import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';
import { iconSizes } from '../Styles/iconSizes.styles';

const AddMoodWrapper = styled.div`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: center;
    `}
`;

const TitleBase = css`
    ${({ theme }) => css`
        font-weight: ${theme.fontBold};
    `}
`;

const TitleFormStyles = styled.h4`
    ${TitleBase}
    ${({ theme }) => css`
        margin-right: ${theme.r100};
        margin-bottom: ${theme.r100};
    `}

    @media ${mediaQueries.s} {
        width: inherit;
        margin-bottom: 0;
    }
`;

const SuggestedMoodsStyles = styled.h4`
    ${({ theme }) => css`
        ${TitleBase}
        text-align: center;
        margin: ${theme.r300};
    `}
`;

const AddMoodStyles = styled.form`
    ${({ theme }) => css`
        padding: ${theme.r200};
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
            margin-right: ${theme.r100 };
            color: ${theme.neutral600 };
        }
    `}
`;

const EmojiSelect = styled.label`
    display: flex;
    svg {
        ${iconSizes.big}
        ${(props) => props.className === 'active' && `fill: ${props.theme.colorMain}`}
    }
    .emoji-radio{
        display: none;
    }
`;

const EmojiSet = styled.div`
    align-items: center;
    display: flex;
`;

export {
    AddMoodStyles,
    AddMoodWrapper,
    EmojiSelect,
    EmojiSet,
    TitleFormStyles,
    SuggestedMoodsStyles,
}
