import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';

const MoodGridCellStyles = styled.li`
    ${({ theme }) => css`
    `}
`;


const MoodGridItemStyles = styled.li`
    ${({ theme }) => css`
        background-color: ${theme.colorMain};
        color: ${theme.neutral000};
        padding: ${theme.r100};
        ${responsiveFonts.BtoL}
    `}
`;

const MoodGridLine = styled.ul`
    ${({ theme }) => css`
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `}
`;

const MoodGridWrapper = styled.div`
    ${({ theme }) => css`
        height: 100vh;
    `}
`;

export {
    MoodGridCellStyles,
    MoodGridItemStyles,
    MoodGridLine,
    MoodGridWrapper,
}
