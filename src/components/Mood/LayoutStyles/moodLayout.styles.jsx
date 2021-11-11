import styled, { css } from 'styled-components';

import mediaQueries from '../../Styles/mediaQueries.styles';
import { SentiramaLogo }  from '../../Styles/common.styles';

const MoodWrapper = styled.div`
    ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media ${mediaQueries.s} {
        flex-direction: row;
    }
        /* @media ${mediaQueries.s} {
            display: flex;
            justify-content: flex-start;
            height: 100vh;
            align-items: center;
            display: flex;
            height: ${theme.r1200};
        } */

    `}
`;

const TitleBase = css`
    ${({ theme }) => css`
        font-weight: ${theme.fontBold};
    `}
`;

const TitleFormStyles = styled.h1`
    ${({ theme }) => css`
        ${TitleBase}
        font-weight: ${theme.fontRegular};
        font-size: ${theme.fontXL};
        margin-bottom: ${theme.r400};


        @media ${mediaQueries.s} {
            width: inherit;
            margin: 0 ${theme.r400};
        }

    `}
`;

const TitleFormStylesLigth= styled(TitleFormStyles)`
    ${({ theme }) => css`
        color: ${theme.neutral000};
    `}
`;

const SentiramaLogoWrapper = styled(SentiramaLogo)`
    ${({ theme }) => css`
        margin: ${theme.r200};
        flex: 0 0 ${theme.r300};
        @media ${mediaQueries.s} {
            flex: 0 0 ${theme.r1000};
        }
    `}
`;

export {
    MoodWrapper,
    SentiramaLogoWrapper,
    TitleFormStyles,
    TitleFormStylesLigth,
}
