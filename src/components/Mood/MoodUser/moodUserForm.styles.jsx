import styled, { css } from 'styled-components';
import themeDefaultImport from '../../Styles/basicVariables.styles';
import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodUserFormWrapper = styled.form`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        padding: 100px 4px 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: 35px;
        margin-top: ${theme.r1500};
        background-color: ${props => props.color};

        @media ${mediaQueries.xs} {
            padding: 64px 45px;
        }

        @media ${mediaQueries.s} {
            flex-direction: row;
            justify-content: space-between;
            gap: inherit;
            height: inherit;
            margin-top: inherit;
            padding: 36px 80px;
        }

        > h1 {
            color: ${themeDefaultImport.neutral000};
            font-size: ${themeDefaultImport.r250};

            @media ${mediaQueries.xs} {
                margin-bottom: ${themeDefaultImport.r400};
            }

            @media ${mediaQueries.s} {
                font-size: ${themeDefaultImport.r300};
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
            border-radius: 38px;
            border: 2px solid ${themeDefaultImport.neutral999};
            padding: 12px;
            width: 100%;
            color: #767676;
            font-size: ${themeDefaultImport.fontS};
            line-height: ${themeDefaultImport.lineHeightXS};
            margin-bottom: ${themeDefaultImport.r350};

            @media ${mediaQueries.s} {
                width: inherit;
                margin-bottom: inherit;
                margin: 0 ${themeDefaultImport.r250};
            }

            @media ${mediaQueries.m} {
                max-width: 230px;
            }
            
            @media ${mediaQueries.l} {
                max-width: 60%;
            }
        }

        button {
            width: 48px;
            height: 48px;
            border-radius: ${theme.round};
            color: ${themeDefaultImport.neutral000};
            background: ${themeDefaultImport.neutral999};
            cursor: pointer;

            @media ${mediaQueries.xs} {
                width: 100%;
                border-radius: 38px;
            }

            @media ${mediaQueries.s} {
                width: 48px;
            }

            > svg {
                width: 48px;
            }
        }
    `}
`;

export {
    MoodUserFormWrapper
};