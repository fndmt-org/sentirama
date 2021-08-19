import styled from 'styled-components';
import themeDefaultImport from '../Styles/basicVariables.styles';

const EmojiSelected = styled.div`
    margin-left: 18px;
`;

const MoodSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;

    > div {
        display: flex;
        align-items: center;
        padding-left: 32px;
        padding-right: 32px;
    }
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
    MoodSelectorWrapper,
    MoodSelector,
    MoodSelectorItem,
    EmojiSelected
};
