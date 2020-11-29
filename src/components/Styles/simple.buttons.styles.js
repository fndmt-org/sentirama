import styled, { css } from 'styled-components';
import { svgSizes } from './svgSizes.styles';

const buttonsMods = {
    enabled: css`
        ${({ theme }) => css`
            background-color: ${theme.buttonPrimaryBgColor
                || theme.colorMain};
            color: ${theme.buttonPrimaryTextColor
                || theme.neutral000};
            :hover {
                opacity: 0.8;
            }
        `}
    `,
    disabled: css`
        ${({ theme }) => css`
            background-color: ${({theme}) => theme.buttonDisabledBgColor
                || theme.neutral400};
            color: ${({theme}) => theme.buttonDisabledTextColor
                || theme.neutral800};
            opacity: 0.5;
        `}
    `,
}

const Button = styled.button`
    ${({ theme }) => css`
        background-clip: padding-box;
        border: 0;
        border-radius: ${theme.buttonRounded || theme.round};
        display: inline-block;
        font-size: 0;
        letter-spacing: inherit;
        padding: ${theme.r050};
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
    `}

`;

export default Button;
