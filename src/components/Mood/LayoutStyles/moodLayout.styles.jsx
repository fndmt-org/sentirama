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
        font-size: ${theme.fontXL};
        font-weight: ${theme.fontRegular};
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
