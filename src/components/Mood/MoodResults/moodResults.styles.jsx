import styled, { css } from 'styled-components';

import mediaQueries from '../../Styles/mediaQueries.styles';
import { ReactComponent as PencilIcon }  from '../../../assets/icons/24/edit.svg';
import { ReactComponent as InfoIcon }  from '../../../assets/icons/24/info.svg';
import { ReactComponent as Met }  from '../../../assets/icons/24/smile.svg';
import { ReactComponent as UnMet }  from '../../../assets/icons/24/frown.svg';
import { iconSizes } from '../../Styles/iconSizes.styles';

const MoodResultsWrapper = styled.div`
    height: 100%;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const MoodResultAverageTitle = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.fontS};
        font-weight: ${theme.fontBold};
        color: ${theme.neutral700};
        padding: ${theme.r050};
        text-transform: uppercase;
    `}
`;

const MoodResultAverageWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        font-size: ${theme.fontB};
        font-weight: ${theme.fontBold};
        color: ${theme.neutral900};
    `}
`;

const moodRibbon = css`
    ${({ theme }) => css`
        display: flex;
        gap: ${theme.r050};
        align-items: center;
        justify-content: center;
        width: ${({value}) =>value}%;
    `}
`;

const MoodResultMet = styled.div`
    ${({ theme }) => css`
        ${moodRibbon}
        background-color: ${theme.colorMetMoodIcon};
    `}
`;

const MoodResultUnMet = styled.div`
    ${({ theme }) => css`
        ${moodRibbon}
        background-color: ${theme.colorUnMetMoodIcon};
    `}
`;

const PencilIconStyles = styled(PencilIcon)`
    ${({ theme }) => css`
        ${iconSizes.M}
        margin-right: ${theme.r050};
    `}
`;

const InfoIconStyles = styled(InfoIcon)`
    ${({ theme }) => css`
        ${iconSizes.M}
        margin-right: ${theme.r050};
    `}
`;

const IconsSize = css`
    position: relative; // Shame
    top: 1px; // Shame
    ${iconSizes.default}
`;

const MetIcon = styled(Met)`
    ${IconsSize}
`;

const UnMetIcon = styled(UnMet)`
    ${IconsSize}
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
    InfoIconStyles,
    MetIcon,
    UnMetIcon,
};
