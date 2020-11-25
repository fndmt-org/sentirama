import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';

const MoodGridItemStyles = styled.li`
    ${({ theme, color }) => css`
        text-align: center;
        color: ${theme.neutral000};
        padding: ${theme.r200};
        font-weight: ${theme.fontBold};
        min-width: 20%;
        ${responsiveFonts.BtoL}
    `}
`;

const ModGridColorStyles =  styled(MoodGridItemStyles)`
    ${({ theme, color }) => css`
        background-color: ${color};
    `}
`;

const MoodGridLine = styled.ul`
    ${({ theme }) => css`
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
    `}
`;

export {
    ModGridColorStyles,
    MoodGridLine,
}
