import { css } from 'styled-components';

const iconSizes = {
    default: css`
        height: ${({ theme }) => theme.iconsSizeL};
        width: ${({ theme }) => theme.iconsSizeL};
    `,
    big: css`
        height: ${({ theme }) => theme.iconSizeThumb};
        width: ${({ theme }) => theme.iconSizeThumb};
    `,
}

export {
    iconSizes
}
