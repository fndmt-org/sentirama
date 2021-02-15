import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';


const MoodGridItemStyles = styled.li`
    ${({ theme, color }) => css`
        /* flex-grow: 1; */
        font-weight: ${theme.fontBold};
        /* min-width: 50%; */
        /* text-align: center; */
        @media ${mediaQueries.phonesLargeW} {
            min-width: 33.33%;
        }
        @media ${mediaQueries.s} {
            min-width: 25%;
        }
        @media ${mediaQueries.m} {
            min-width: 20%;
        }
        @media ${mediaQueries.l} {
            min-width: 10%;
        }
        @media ${mediaQueries.xl} {
            min-width: 5%;
        }
        ${responsiveFonts.BtoL}
    `}
`;

const ModGridColorStyles =  styled(MoodGridItemStyles)`
    ${({ theme, color }) => css`
        background-color: ${color};
    `}
`;

const ModButtonStyles =  styled.button`
    ${({ theme, color }) => css`
        padding: ${theme.r200};
        background-color: transparent;
        color: ${theme.neutral000};
        width: 100%;
        height: 100%;
    `}
`;

const MoodGridLine = styled.ul`
    ${({ theme }) => css`
        list-style: none;
        /* display: flex; */
        /* flex-wrap: wrap; */
        /* justify-content: stretch; */
    `}
`;


export {
    ModButtonStyles,
    ModGridColorStyles,
    MoodGridLine,
}
