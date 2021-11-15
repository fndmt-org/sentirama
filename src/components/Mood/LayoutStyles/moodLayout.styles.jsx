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

        @media ${mediaQueries.s} {
            width: inherit;
        }
    `}
`;

const TitleFormStylesOverColors= styled(TitleFormStyles)`
    ${({ theme }) => css`
        color: ${theme.neutral900};
    `}
`;

const SentiramaLogoWrapper = styled(SentiramaLogo)`
    ${({ theme }) => css`
        margin: ${theme.showLogo && theme.r200};
        flex: 0 0 ${theme.showLogo &&theme.r200};

        @media ${mediaQueries.s} {
            flex: 0 0 ${theme.showLogo &&theme.r1000};
        }
    `}
`;

export {
    MoodWrapper,
    SentiramaLogoWrapper,
    TitleFormStyles,
    TitleFormStylesOverColors,
}
