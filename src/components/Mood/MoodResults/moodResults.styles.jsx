import styled, { css } from 'styled-components';
import mediaQueries from '../../Styles/mediaQueries.styles';
import { ReactComponent as PencilIcon }  from '../../../assets/icons/24/edit.svg';

const MoodResultsWrapper = styled.div`
    height: 100%;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${mediaQueries.s} {

    }
`;

const MoodResultsUser = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${props => props.color};
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        @media ${mediaQueries.s} {
            flex-direction: row;
        }
    `}
`;

const CustomButton = styled.button`
    ${({ theme }) => css`
        background-color: transparent;
        color: ${theme.neutral000};
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

const MoodResultAverageTitle = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.fontXS};
        font-weight: ${theme.fontBold};
        color: ${theme.neutral700};
        padding: ${theme.r100};
        text-transform: uppercase;
    `}
`;

const MoodResultAverageWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        font-size: ${theme.fontS};
        font-weight: ${theme.fontBold};
        color: ${theme.neutral000};
    `}
`;

const MoodResultMet = styled.div`
    ${({ theme }) => css`
        width: ${({value}) =>value}%;
        background-color: ${theme.colorGoodMoodIcon};
    `}
`;

const MoodResultUnMet = styled.div`
    ${({ theme }) => css`
        width: ${({value}) =>value}%;
        background-color: ${theme.colorBadMoodIcon};
    `}
`;

const PencilIconStyles = styled(PencilIcon)`
    ${({ theme }) => css`
        width: ${theme.iconsSizeS};
        height: ${theme.iconsSizeS};
        margin-right: ${theme.r050};
    `}
`;

export {
    CustomButton,
    MoodResultAverageTitle,
    MoodResultAverageWrapper,
    MoodResultMet,
    MoodResultsUser,
    MoodResultsWrapper,
    MoodResultUnMet,
    PencilIconStyles,
};
