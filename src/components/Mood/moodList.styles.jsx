import styled from 'styled-components';

const MoodListStyles= styled.ul`
    height: ${(props) => `calc(100% - ${props.addHeight})`};
    overflow: auto;
    overscroll-behavior-y: contain;
    list-style: none;
`;

export {
    MoodListStyles,
};
