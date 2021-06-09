import { createGlobalStyle } from 'styled-components';


const bodyOverflowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const bodyOverflowVisible = createGlobalStyle`
    body {
        overflow: visible;
    }
`;

export {
    bodyOverflowHidden,
    bodyOverflowVisible,
};
