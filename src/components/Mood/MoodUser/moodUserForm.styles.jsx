import styled, { css } from 'styled-components';
import mediaQueries from '../../Styles/mediaQueries.styles';
import { IconButton } from '../../Styles/buttons.styles';

const UserFormWrapper = styled.form`
    ${({ theme }) => css`
        align-items: stretch;
        background-color: ${props => props.color};
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        width: 100%;

        @media ${mediaQueries.s} {
            flex-direction: row;
            justify-content: space-evenly;
        }
    `}
`;

const FieldWrapper = styled.div`
    ${({ theme }) => css`
        align-content: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: ${theme.r200};
        flex: 0 0 ${theme.r2000};

        @media ${mediaQueries.s} {
            flex: 0 0 ${theme.r3000};
        }

    `}
`;

const FieldLabel = styled.label`
    ${({ theme }) => css`
        align-self: flex-start;
        font-size: ${theme.fontS};
        position: absolute;
        transform: translate(0, -${theme.r400});
        visibility: ${props => props.showLabel ? 'visible' : 'hidden'};
    `}
`;

const IconButtonNext = styled(IconButton)`
    ${({ theme }) => css`
        margin: ${theme.r200};

        @media ${mediaQueries.s} {
            align-self: center;
            margin-left: 0;
            margin-right: ${theme.r400};
        }
    `}
`;

export {
    FieldLabel,
    FieldWrapper,
    IconButtonNext,
    UserFormWrapper,
};
