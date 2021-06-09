import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';


const MoodGridItemStyles = styled.li`
    ${({ theme, color }) => css`
        font-weight: ${theme.fontBold};

        /* @media ${mediaQueries.phonesLargeW} {

        }
        @media ${mediaQueries.s} {

        }
        @media ${mediaQueries.m} {

        }
        @media ${mediaQueries.l} {

        }
        @media ${mediaQueries.xl} {

        } */
        ${responsiveFonts.BtoL}
    `}
`;

const MoodColorSc = styled(MoodGridItemStyles)`
    ${({ theme, color }) => css`
        background-color: ${color};
    `}
`;

const MoodItemSc = styled(MoodColorSc)`
    flex-grow: 1;
`;

const MoodCategorySc = styled(MoodColorSc)`
    display: flex;
`;

const MoodButtonSc = styled.button`
    ${({ theme, color }) => css`
        padding: ${theme.r200};
        background-color: transparent;
        color: ${theme.neutral000};
        align-self: baseline;
        text-align: initial;
    `}
`;

const CategoryButtonSc = styled(MoodButtonSc)`
    flex-basis: 100%;
`;
const CategoryButtonActiveSc = styled(MoodButtonSc)`
    flex-basis: 50%;
`;

const MoodGridSc = styled.ul`
    ${({ theme }) => css`
        list-style: none;
    `}
`;


export {
    CategoryButtonSc,
    CategoryButtonActiveSc,
    MoodButtonSc,
    MoodItemSc,
    MoodCategorySc,
    MoodGridSc,
}
