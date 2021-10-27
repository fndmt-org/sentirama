import styled, { css } from 'styled-components';

import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodWrapper = styled.div`
    ${({ theme }) => css`
        padding: ${theme.r400} ${theme.r300};
        align-items: center;
        display: flex;
        justify-content: flex-start;
        padding-left: ${theme.r300};
        padding-right: ${theme.r300};
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
        font-weight: ${theme.fontRegular};
        font-size: ${theme.fontXXL};
        margin-right: ${theme.r1000};
        margin-left: ${theme.r1000};
        margin-bottom: ${theme.r100};
    `}

    @media ${mediaQueries.s} {
        width: inherit;
        margin-bottom: 0;
    }
`;


export {
    MoodWrapper,
    TitleFormStyles,
}
