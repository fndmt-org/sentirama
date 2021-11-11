import styled, { css } from 'styled-components';
import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodUserFormWrapper = styled.form`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        padding: ${theme.r100} ${theme.r050} 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: ${theme.r300};
        margin-top: ${theme.r1500};
        background-color: ${props => props.color};

        @media ${mediaQueries.xs} {
            padding: ${theme.r075} ${theme.r050};
        }

        @media ${mediaQueries.s} {
            flex-direction: row;
            justify-content: space-between;
            gap: inherit;
            height: inherit;
            margin-top: inherit;
            padding: ${theme.r050} ${theme.r075};
        }

        > h1 {
            color: ${theme.neutral000};
            font-size: ${theme.r250};

            @media ${mediaQueries.xs} {
                margin-bottom: ${theme.r400};
            }

            @media ${mediaQueries.s} {
                font-size: ${theme.r300};
                margin-bottom: inherit;
            }
        }

        > div {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            width: 100%;

            @media ${mediaQueries.s} {
                flex-direction: row;
            }
        }

        input {
            border-radius: ${theme.formFieldBorderRadius};
            border: 2px solid ${theme.neutral999};
            padding: ${theme.r100};
            width: 100%;
            color: ${theme.neutral600};
            font-size: ${theme.fontS};
            line-height: ${theme.lineHeightXS};
            margin-bottom: ${theme.r350};

            @media ${mediaQueries.s} {
                width: inherit;
                margin-bottom: inherit;
                margin: 0 ${theme.r250};
            }

            @media ${mediaQueries.m} {
                max-width: ${theme.r2500};
            }

            @media ${mediaQueries.l} {
                max-width: 60%;
            }
        }

        button {
            width: ${theme.iconSizeThumb};
            height: ${theme.iconSizeThumb};
            border-radius: ${theme.round};
            color: ${theme.neutral000};
            background: ${theme.neutral999};
            cursor: pointer;

            @media ${mediaQueries.xs} {
                width: 100%;
                border-radius: ${theme.round};
            }

            @media ${mediaQueries.s} {
                width: ${theme.iconSizeThumb};
            }

            > svg {
                width: ${theme.iconSizeThumb};
            }
        }
    `}
`;

export {
    MoodUserFormWrapper
};
