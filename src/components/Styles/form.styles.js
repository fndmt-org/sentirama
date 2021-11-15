import styled, { css } from 'styled-components';
import responsiveFonts from './responsiveFonts.styles';
import mediaQueries from './mediaQueries.styles';

const InputStyleBase = styled.input`
    ${({ theme }) => css`
        background: ${theme.formFieldBackgorund};
        border-radius: ${theme.formFieldBorderRadius};
        border: ${theme.formFieldBorder};
        color: ${theme.formFieldColor};
        margin: ${theme.r100};

        padding: ${theme.r100} ${theme.r200};
        text-align: start;
        min-width: 120px;
        width: 100%;

        &:focus {
            outline: ${theme.outline};
            outline-offset: 0;
        }

        @media ${mediaQueries.s} {
            margin-left: 0;
        }

        ${responsiveFonts.StoB}
    `}
`;

export {
    InputStyleBase
}
