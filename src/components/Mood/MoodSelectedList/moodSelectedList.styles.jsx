import styled, { css } from 'styled-components';

import { ReactComponent as PencilIcon }  from '../../../assets/icons/24/edit.svg';
import { iconSizes } from '../../Styles/iconSizes.styles';

import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodListWrapper = styled.div`
    ${({ theme, isModeAverage }) => css`
        height: calc(100% - 55px);
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ${isModeAverage && css`
        background-color: ${props => props.color};
        color: ${theme.neutral000};
        `}
    `}
`;

const MoodListUser = styled.div`
    ${({ theme }) => css`
        overflow-y: scroll;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        color: ${theme.neutral999};
        font-size: ${theme.fontB};
    `}
`;

const CustomButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.neutralTransparent000};
        color: ${theme.neutral900};
        font-size: ${theme.fontB};
        margin-top: ${theme.r150};
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
    MoodListUser,
    MoodListWrapper,
    CustomButton,
    PencilIconStyles,
};
