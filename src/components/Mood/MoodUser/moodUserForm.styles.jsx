import styled from 'styled-components';
import themeDefaultImport from '../../Styles/basicVariables.styles';

const MoodUserFormWrapper = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 36px 80px;
    width: 100%;
    background-color: ${props => props.color};

    > h1 {
        color: ${themeDefaultImport.neutral000};
    }

    > input {
        border-radius: 38px;
        border: 2px solid ${themeDefaultImport.neutral999};
        padding: 12px;
        min-width: 230px;
        color: #767676;
        font-size: ${themeDefaultImport.fontS};
        line-height: ${themeDefaultImport.lineHeightXS};
    }

    > button {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        color: ${themeDefaultImport.neutral000};
        background: ${themeDefaultImport.neutral999};
        cursor: pointer;
    }
`;

export {
    MoodUserFormWrapper
};