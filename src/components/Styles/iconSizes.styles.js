import { css } from 'styled-components';

const iconSizes = {
    default: css`
        height: ${({ theme }) => theme.iconsSizeL};
        width: ${({ theme }) => theme.iconsSizeL};
    `,
    big: css`
        height: ${({ theme }) => theme.iconDefaultSize};
        width: ${({ theme }) => theme.iconDefaultSize};
    `,
}

export {
    iconSizes
}
