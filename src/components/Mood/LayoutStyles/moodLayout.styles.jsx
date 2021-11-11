import styled, { css } from 'styled-components';

import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodWrapper = styled.div`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: flex-start;
        height: 100vh;

        @media ${mediaQueries.s} {
            height: auto;
        }

        > svg,
        > form > svg {
            position: absolute;
            top: ${theme.r100};
            transform: translateX(-50%);
            left: 50%;

            @media ${mediaQueries.s} {
                position: inherit;
                transform: none;
                min-width: 102px;
                height: 50px;
                margin-right: 26px;
            }
        }
    `}
`;

const TitleBase = css`
    ${({ theme }) => css`
        font-weight: ${theme.fontBold};
    `}
`;

const TitleFormStyles = styled.span`
    ${TitleBase}
    ${({ theme }) => css`
        font-weight: ${theme.fontRegular};
        font-size: ${theme.fontS};
        margin-bottom: ${theme.r400};

        @media ${mediaQueries.xs} {
            font-size: ${theme.fontXXL};
            margin: ${theme.r400};
        }

        @media ${mediaQueries.s} {
            width: inherit;
            margin: 0 ${theme.r400};
        }

        @media ${mediaQueries.m} {
            margin: 0 ${theme.r1000};
        }
    `}
`;


export {
    MoodWrapper,
    TitleFormStyles,
}
