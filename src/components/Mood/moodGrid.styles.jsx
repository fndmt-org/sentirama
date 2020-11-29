import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';

const MoodGridItemStyles = styled.li`
    ${({ theme, color }) => css`
        text-align: center;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
    `}
`;


export {
    ModButtonStyles,
    ModGridColorStyles,
    MoodGridLine,
}
