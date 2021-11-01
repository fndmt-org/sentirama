import styled from 'styled-components';
import themeDefaultImport from '../../Styles/basicVariables.styles';
import mediaQueries from '../../Styles/mediaQueries.styles';

const MoodResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 100%;

    @media ${mediaQueries.s} {
        align-self: inherit;
    }

    > div,
    > span,
    > h1 {
        text-align: center;
    }

    .results-user {
        background-color: ${props => props.color};
        padding: 0 ${themeDefaultImport.r150};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: calc(100vh - 120px);

        @media ${mediaQueries.xs} {
            padding: 0 ${themeDefaultImport.r400};
        }

        @media ${mediaQueries.s} {
            flex-direction: row;
            height: 80px;
        }
    }

    .results-message-wrapper {
        display: inline-block;
        font-size: ${themeDefaultImport.fontB};
        margin-bottom: ${themeDefaultImport.r150};

        @media ${mediaQueries.xs} {
            font-size: ${themeDefaultImport.fontXXL};
        }

        @media ${mediaQueries.s} {
            margin-bottom: inherit;
        }
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
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media ${mediaQueries.s} {
            height: inherit;
            display: block;
        }
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
    margin-right: ${themeDefaultImport.r150};
    display: flex;
    align-items: center;
    cursor: pointer;

    @media ${mediaQueries.s} {
        margin-left: ${themeDefaultImport.r200};
        margin-right: inherit;
    }

    > svg {
        width: 40px;
    }
`;

const MoodResultAverageWrapper = styled.div`
    color: ${themeDefaultImport.neutral000};
`;

const MoodResultMet = styled.div`
    width: ${({value}) =>value}%;
    background-color: #219653; // HARDCODED
`;

const MoodResultUnMet = styled.div`
    width: ${({value}) =>value}%;
    background-color: #B43F3D; // HARDCODED
`;

export {
    MoodResultAverageWrapper,
    MoodResultMet,
    MoodResultUnMet,
    MoodResultsWrapper,
    CustomButton
};
