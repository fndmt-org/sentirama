import styled from 'styled-components';
import themeDefaultImport from '../../Styles/basicVariables.styles';

const MoodResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > div,
    > span,
    > h1 {
        text-align: center;
    }

    .results-user {
        background-color: ${props => props.color};
        padding: ${themeDefaultImport.r200} 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .results-user-message {
        margin: 0 8px;
    }

    .results-average-message,
    .results-average {
        font-size: ${themeDefaultImport.fontB};
        line-height: ${themeDefaultImport.lineHeightS};
    }

    .results-average-message {
        padding: 4px 0;
    }

    .results-average {
        display: flex;
        justify-content: center;

        > div {
            flex-grow: 1;
            padding: 0 8px;
        }

        .good-average {
            text-align: right;
        }

        .bad-average {
            text-align: left;
        }
    }

    .results-user,
    .results-average {
        color: ${themeDefaultImport.neutral000}
    }

    .good-average{
        background-color: #219653; // HARDCODED
    }

    .bad-average{
        background-color: #B43F3D; // HARDCODED
    }
`;

const CustomButton = styled.button`
    background-color: transparent;
    color: ${themeDefaultImport.neutral000};
    font-size: ${themeDefaultImport.fontB};
    margin-left: ${themeDefaultImport.r200};
    display: flex;
    align-items: center;
    cursor: pointer;

    > svg {
        width: 14px;
        margin-right: ${themeDefaultImport.r100};
    }
`;

export {
    MoodResultsWrapper,
    CustomButton
};
