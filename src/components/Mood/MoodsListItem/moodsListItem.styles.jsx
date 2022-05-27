import styled, { css } from 'styled-components';

import { ReactComponent as PencilIcon }  from './../../../assets/icons/24/edit.svg';
import { iconSizes } from './../../Styles/iconSizes.styles';
import mediaQueries from './../../Styles/mediaQueries.styles';

const MoodsListItemWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: ${theme.r150} ${theme.r075};
    `}
`;

const Mood = styled.div`
    ${({ theme, isModeAverage }) => css`
        display: flex;
        align-items: center;
        border-radius: ${theme.buttonRounded || theme.round};
        position: relative;
        padding: ${theme.r100};
        padding-inline-end: ${theme.r200};
        color: ${theme.neutral000};
        margin-inline-start: ${theme.r150};

        ${isModeAverage ? css`
        background: ${theme.neutralTransparent000};
        border: 2px solid ${theme.neutral000};
        `: css`
        background-color: ${props => props.color};
        border: 2px solid ${theme.neutralTransparent000};
        `}

        svg {
            width: ${theme.r400};
        }
    `}
`;

const UserName = styled.span`
    ${({ theme, isModeAverage }) => css`
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        color: ${ isModeAverage ? theme.neutral000 : theme.colorMain700};
        margin-inline-start: ${theme.r100};
    `}
`;

const DateTimeWrapper = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.fontXS};
    `}
`;

const EditButton = styled.button`
    ${({ theme, isModeAverage }) => css`
        color: ${ isModeAverage ? theme.neutral000 : theme.colorCustom500};
        background-color: ${theme.neutralTransparent000};
        font-size: ${theme.fontB};
        display: flex;
        align-items: center;
        text-decoration: underline;

        :hover {
            text-decoration: none;
        }

        @media ${mediaQueries.s} {
            margin-top: inherit;
            margin-left: ${theme.r200};
            margin-right: inherit;
        }
    `}
`;

const PencilIconStyles = styled(PencilIcon)`
    ${({ theme }) => css`
        ${iconSizes.M}
        margin-right: ${theme.r050};
    `}
`;

export {
    DateTimeWrapper,
    EditButton,
    Mood,
    MoodsListItemWrapper,
    PencilIconStyles,
    UserName,
};
