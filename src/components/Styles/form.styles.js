import styled, { css } from 'styled-components';
import responsiveFonts from './responsiveFonts.styles';
import mediaQueries from './mediaQueries.styles';

const InputStyleBase = styled.input`
    ${({ theme }) => css`
        background: ${theme.formFieldBackgorund};
        border: ${theme.formFieldBorder};
        border-radius: ${theme.formFieldBorderRadius};
        background-color: transparent;
        color: ${theme.formFieldColor};
        outline: ${theme.outline};
        padding: ${theme.r100} ${theme.r200};
        text-align: start;
        margin: ${theme.r100};
        @media ${mediaQueries.s} {
            margin-left: 0;
        }
        ${responsiveFonts.StoB}
    `}
`;

export {
    InputStyleBase
}
