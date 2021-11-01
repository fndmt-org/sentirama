import styled from 'styled-components';
import themeDefaultImport from '../../Styles/basicVariables.styles';
import mediaQueries from '../../Styles/mediaQueries.styles';

const EmojiSelected = styled.div`
    margin-left: 18px;
`;

const MoodSelector = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: auto;
    margin-top: 80px;

    &::-webkit-scrollbar {
        display: none;
    }

    & {
        ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    @media ${mediaQueries.s} {
        margin-top: inherit;
    }
`;

const MoodSelectorItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${themeDefaultImport.r050};
    height: ${themeDefaultImport.r2500};
    cursor: pointer;
    background-color: ${props => props.color};
    color: ${themeDefaultImport.neutral050};
    font-size: ${themeDefaultImport.fontB};

    @media ${mediaQueries.xs} {
        padding: 0 ${themeDefaultImport.r200};
    }

    @media ${mediaQueries.s} {
        min-width: ${themeDefaultImport.r1600};
        height: ${themeDefaultImport.r1200};
        padding: 0;
    }
`;

export {
    MoodSelector,
    MoodSelectorItem,
    EmojiSelected
};
