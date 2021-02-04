import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';
import { svgSizes } from './common.styles';


const CardBase = styled.div`
    background-clip: padding-box;
    border: 0;
    display: flex;
    ${responsiveFonts.BtoL}
    align-items: center;
    letter-spacing: inherit;
    text-transform: inherit;
    padding:${({ theme }) => `${theme.r100}`};
    svg {
        ${svgSizes.default}
    }
`;

const Input = styled.input`
    background: ${({ theme }) => theme.formFieldBackgorund};
    border: ${({ theme }) => theme.formFieldBorder};
    border-radius: ${({ theme }) => theme.formFieldBorderRadius};
    background-color: transparent;
    color: ${({ theme }) => theme.formFieldColor};
    outline: ${({ theme }) => theme.outline};
    padding: ${({ theme }) => `${theme.r100} ${theme.r200}`};
    text-align: start;
    margin: ${({ theme }) => `${theme.r100}`};
    @media ${mediaQueries.s} {
        margin-left: 0;
    }
    ${responsiveFonts.StoB}
`;

const MoodListStyles= styled.ul`
    height: ${(props) => `calc(100% - ${props.addHeight})`};
    overflow: auto;
    overscroll-behavior-y: contain;
    list-style: none;
`;

const SendCard = styled(CardBase)`
    background-color: ${({theme}) => theme.neutral050 };
    bottom: 0;
    padding:${({ theme }) => `${theme.r200}`};
    width: 100%;

    label {
        margin-right: ${({theme}) => theme.r100 };
        color: ${({theme}) => theme.neutral600 };
    }

    & form {
        align-items: center;
        display: flex;
        flex-flow: column;
        width: 100%;
        text-align: center;
        ${responsiveFonts.BtoL}

        @media ${mediaQueries.s} {
            flex-flow: row;
            flex-wrap: wrap;
            text-align: left;

            input {

            }
        }

        h4 {
            font-weight: ${({ theme }) => theme.fontBold};
            margin-right: ${({ theme }) => theme.r100};
            margin-bottom: ${({ theme }) => theme.r100};

            width: 100%;

            @media ${mediaQueries.s} {
                width: inherit;
                margin-bottom: 0;
            }
        }

        button {
            @media ${mediaQueries.xs} {
                width: 21rem;
            }
            @media ${mediaQueries.s} {
                margin-left: ${({ theme }) => theme.r100};
            }
        }
    }
`;

const buttonsMods = {
    enabled: css`
        background-color: ${({theme}) => theme.buttonPrimaryBgColor
            || theme.colorMain};
        color: ${({theme}) => theme.buttonPrimaryTextColor
            || theme.neutral000};
        :hover {
            opacity: 0.8;
        }
    `,
    disabled: css`
        background-color: ${({theme}) => theme.buttonDisabledBgColor
            || theme.neutral400};
        color: ${({theme}) => theme.buttonDisabledTextColor
            || theme.neutral800};
        opacity: 0.5;
    `,
}

const Button = styled.button`
    background-clip: padding-box;
    border: 0;
    border-radius: ${({theme}) => theme.buttonRounded || theme.round};
    display: inline-block;
    font-size: 0;
    letter-spacing: inherit;
    padding:${({ theme }) => `${theme.r050}`};
    text-align: center;
    text-decoration: none;
    text-transform: inherit;
    ${(props) => props.disabled
        ? buttonsMods.disabled
        : buttonsMods.enabled
    }
    svg {
        ${svgSizes.default}
    }
`;

const EmojiSelect = styled.label`
    display: flex;
    position: relative;
    svg {
        ${svgSizes.big}
        ${(props) => props.className === 'active' && `fill: ${props.theme.colorMain}`}
    }
    .emoji-radio{
        display: none;
    }
`;

const EmojiSet = styled.div`
    display: flex;
`;

export {
    Button,
    SendCard,
    Input,
    CardBase,
    EmojiSet,
    EmojiSelect,
    MoodListStyles
};