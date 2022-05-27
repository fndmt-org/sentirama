import { css } from 'styled-components';

const iconSizes = {
    default: css`
        height: 1em;
        width: 1em;
    `,
    T: css`
        height: ${({ theme }) => theme.iconSizeThumb};
        width: ${({ theme }) => theme.iconSizeThumb};
    `,
    M: css`
        height: ${({ theme }) => theme.iconsSizeM};
        width: ${({ theme }) => theme.iconsSizeM};
    `,
    L: css`
        height: ${({ theme }) => theme.iconsSizeL};
        width: ${({ theme }) => theme.iconsSizeL};
    `,
    FW: css`
        width: 100%;
    `,
    FH: css`
        height: 100%;
    `,
}

export {
    iconSizes
}
