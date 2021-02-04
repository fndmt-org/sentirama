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
        width: ${theme.r2000};
        margin: 0;
        padding: 0;
        z-index: ${theme.zBaseTop};
        position: absolute;
        list-style: none;
        background-color: ${theme.neutral050};
        overflow: auto;
        max-height: ${theme.r2000};
    `}
`;

const AutocompleteItemListBase = styled.li`
    ${({ theme }) => css`
        &[data-focus="true"] {
            background-color: ${theme.colorMain300};
            color: ${theme.neutral000};
            cursor: pointer;
        }
        &:active {
            background-color: ${theme.colorMain700};
            color: ${theme.neutral050};
        }
    `}
`;

export {
    AutcompleteField,
    AutcompleteInput,
    AutocompleteItemListBase,
    AutcompleteList,
}
