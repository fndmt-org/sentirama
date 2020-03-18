import { css } from 'styled-components';
import mediaQueries from './mediaQueries.styles';

const responsiveFonts = {
    XStoS: css`
        font-size: ${({ theme }) => theme.fontXS};

        @media ${mediaQueries.phonesLargeW} {
            font-size: ${({ theme }) => theme.fontS};
        }
    `,
    StoB: css`
        font-size: ${({ theme }) => theme.fontS};

        @media ${mediaQueries.phonesLargeW} {
            font-size: ${({ theme }) => theme.fontB};
        }
    `,
    BtoL: css`
        font-size: ${({ theme }) => theme.fontB};

        @media ${mediaQueries.phonesLargeW} {
            font-size: ${({ theme }) => theme.fontL};
        }
    `,
    LtoXL: css`
        font-size: ${({ theme }) => theme.fontL};

        @media ${mediaQueries.phonesLargeW} {
            font-size: ${({ theme }) => theme.fontXL};
        }
    `,
    XLtoXXL: css`
        font-size: ${({ theme }) => theme.fontXL};

        @media ${mediaQueries.phonesLargeW} {
            font-size: ${({ theme }) => theme.fontXXL};
        }
    `,
};

export default responsiveFonts;
