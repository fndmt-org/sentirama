import styled, { css } from 'styled-components';
import mediaQueries from '../../Styles/mediaQueries.styles';

const EmojiSelected = styled.div`
    margin-left: 18px;
`;

const MoodSelector = styled.ul`
    align-items: stretch;
    display: flex;
    height: 100%;
    overflow-x: auto;
    flex-direction: column;
    @media ${mediaQueries.s} {
        flex-direction: row;
    }
`;

const MoodSelectorItem = styled.li`
    ${({ theme }) => css`
        align-self: center;
        justify-content: center;
        padding: 0 ${theme.r050};
        text-align: center;
        cursor: pointer;
        height: 100%;
        background-color: ${props => props.color};
        color: ${theme.neutral050};
        min-width: ${theme.r1600};
        font-size: ${theme.fontB};

        @media ${mediaQueries.xs} {
            padding: 0 ${theme.r200};
        }

        @media ${mediaQueries.s} {
            padding: 0;
        }
    `}
`;

export {
    MoodSelector,
    MoodSelectorItem,
    EmojiSelected
};
