import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import responsiveFonts from '../Styles/responsiveFonts.styles';

const moodGama= {
    good: css`
        color: ${({theme}) => theme.colorSuccess900};
        background-color: ${({theme}) => theme.colorSuccess100};
    `
}

const Input = styled.input`
    background: ${({ theme }) => theme.formFieldBackgorund};
    border: ${({ theme }) => theme.formFieldBorder};
    border-radius: ${({ theme }) => theme.formFieldBorderRadius};
    color: ${({ theme }) => theme.formFieldColor};
    outline: ${({ theme }) => theme.outline};
    background-color: transparent;
    color: ${({ theme }) => theme.formFieldColor};
    outline: ${({ theme }) => theme.outline};
    padding: ${({ theme }) => `${theme.r100} ${theme.r200}`};
    margin-right: ${({ theme }) => theme.r100};
    text-align: start;
    ${responsiveFonts.StoB}
`;

const CardGood = styled.div`
    background-clip: padding-box;
    border: 0;
    border-radius: ${({theme}) => theme.roundedCard };
    display: flex;
    text-align: center;
    letter-spacing: inherit;
    text-transform: inherit;

    box-shadow: ${({theme}) => theme.boxShadowBottom2 };
    transition: 0.3s;
    :hover {
        box-shadow: ${({theme}) => theme.boxShadowBottom4 };
    }
    ${moodGama.good}
`;

const SendCard = styled.div`
    background-clip: padding-box;
    border: 0;
    border-radius: ${({theme}) => theme.roundedCard };
    box-shadow: ${({theme}) => theme.boxShadowBottom2 };
    display: inline-flex;
    text-align: center;
    letter-spacing: inherit;
    text-transform: inherit;
    padding:${({ theme }) => `${theme.r200}`};
    & form {
        display: flex;
        align-items: center;

        h4{
            margin-right: ${({ theme }) => theme.r100};
        }

        button{
            margin-left: ${({ theme }) => theme.r100};
        }
    }
`;

const Button = styled.button`
    background-clip: padding-box;
    border: 0;
    border-radius: ${({theme}) => theme.buttonRounded || theme.round};
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding:${({ theme }) => `${theme.r050}`};
    background-color: ${({theme}) => theme.buttonPrimaryBgColor
                || theme.colorMain};
    color: ${({theme}) => theme.buttonPrimaryTextColor
        || theme.neutral000};
    letter-spacing: inherit;
    text-transform: inherit;
    svg {
        height: ${({ theme }) => theme.iconsSizeL};
        width: ${({ theme }) => theme.iconsSizeL};
    }
    :hover {
        opacity: 0.8;
    }
`;

export { Button, SendCard, Input };
