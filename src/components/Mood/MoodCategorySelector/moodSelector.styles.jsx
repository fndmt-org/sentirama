import styled, { css } from 'styled-components';
import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodSelectorList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: auto;
    width: 100%;

    @media ${mediaQueries.s} {
        flex-direction: row;
    }
`;

const MoodSelectorItem = styled.li`
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.neutral050};
        display: flex;

        @media ${mediaQueries.s} {
            border-left: 1px solid ${theme.neutral050};
        }

    `}
`;

const MoodSelectorButton = styled.button`
    ${({ theme }) => css`
        background-color: ${props => props.color};
        color: ${theme.neutral050};
        font-size: ${theme.fontB};
        min-height: ${theme.r1200};
        min-width: 100%;

        @media ${mediaQueries.s} {
            min-width: ${theme.r1600};
        }
    `}
`;

export {
    MoodSelectorList,
    MoodSelectorItem,
    MoodSelectorButton,
};
