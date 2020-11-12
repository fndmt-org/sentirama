import styled, { css } from 'styled-components';

import { InputStyleBase } from '../Styles/form.styles';

const AutcompleteField= styled.div`
    label {
        display: none;
    }
`;

const AutcompleteInput= styled(InputStyleBase)`

`;

const AutcompleteList = styled.ul`
    ${({ theme }) => css`
        width: 200px;
        margin: 0;
        padding: 0;
        z-index: 1;
        position: absolute;
        list-style: none;
        background-color: ${theme.neutral050 };
        overflow: auto;
        max-height: 200px;
        border: 1px solid rgba(0,0,0,.25);
        & li[data-focus="true"] {
            background-color: #4a8df6;
            color: white;
            cursor: pointer;
        }
        & li:active {
            background-color: #2977f5;
            color: white;
        }
    `}
`;

export {
    AutcompleteField,
    AutcompleteInput,
    AutcompleteList,
}
