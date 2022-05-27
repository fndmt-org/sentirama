import styled, { css, createGlobalStyle } from 'styled-components';

import { ReactComponent as LogoSVG }  from '../../assets/images/sentirama-logo.svg';

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

const SentiramaLogo = styled(LogoSVG)`
    ${({ theme }) => css`
        fill: ${theme.colorMainLogo || theme.neutral900};
        height: ${theme.logoDefaultHeight};
    `}
`;

export {
    bodyOverflowHidden,
    bodyOverflowVisible,
    SentiramaLogo,
};
