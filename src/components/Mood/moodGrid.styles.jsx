import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';
import { svgSizes } from '../Styles/svgSizes.styles';

const MoodGridCellStyles = styled.li`
    ${({ theme }) => css`
    `}
`;

const MoodGridItemStyles = styled.li`
    ${({ theme }) => css`
        padding: ${theme.r100}
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
