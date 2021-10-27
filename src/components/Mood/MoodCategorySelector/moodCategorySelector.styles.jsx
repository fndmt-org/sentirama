import styled from 'styled-components';
import themeDefaultImport from '../../Styles/basicVariables.styles';

const EmojiSelected = styled.div`
    margin-left: 18px;
`;

const MoodSelector = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    & {
        ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`;

const MoodSelectorItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${themeDefaultImport.r1600};
    height: ${themeDefaultImport.r1200};
    cursor: pointer;
    background-color: ${props => props.color};
    color: ${themeDefaultImport.neutral050};
    font-size: ${themeDefaultImport.fontB};
`;

export {
    MoodSelector,
    MoodSelectorItem,
    EmojiSelected
};
