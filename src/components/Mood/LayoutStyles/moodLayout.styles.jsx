import styled, { css } from 'styled-components';

import mediaQueries from '../../Styles/mediaQueries.styles';
import { SentiramaLogo }  from '../../Styles/common.styles';

const MoodWrapper = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${props => props.color};
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-width: 100%;

        @media ${mediaQueries.s} {
            flex-direction: row;
        }
    `}
`;

const TitleFormStyles = styled.h1`
    ${({ theme }) => css`
        align-self: center;
        font-size: ${theme.fontXL};
        font-weight: ${theme.fontRegular};
        height: max-content;
        text-align: center;
        margin: ${theme.r350};

        @media ${mediaQueries.s} {
            width: max-content;
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
