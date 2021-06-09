import styled, { css } from 'styled-components';

import { iconSizes } from '../Styles/iconSizes.styles';
import responsiveFonts from '../Styles/responsiveFonts.styles';

const moodGama = {
    baloons: {
        default: css`
            color: ${({theme}) => theme.neutral100};
            background-color: ${({theme}) => theme.neutral700};
        `,
        good: css`
            color: ${({theme}) => theme.colorSuccess100};
            background-color: ${({theme}) => theme.colorSuccess700};
        `,
        neutral: css`
            color: ${({theme}) => theme.colorWarning100};
            background-color: ${({theme}) => theme.colorWarning};
        `,
        bad: css`
            color: ${({theme}) => theme.colorError100};
            background-color: ${({theme}) => theme.colorError700};
        `
    },
    triangles: {
        default: css`${({theme}) => theme.neutral700};`,
        good: css`${({theme}) => theme.colorSuccess700};`,
        neutral: css`${({theme}) => theme.colorWarning};`,
        bad: css`${({theme}) => theme.colorError700};`
    }
}

const MoodItemStyles = styled.div`
    background-clip: padding-box;
    border: 0;
    display: flex;
    ${responsiveFonts.BtoL}
    align-items: center;
    letter-spacing: inherit;
    text-transform: inherit;
    padding:${({ theme }) => `${theme.r100}`};

    svg {
        ${iconSizes.default}
    }

    margin: ${({ theme }) => `0 ${theme.r150}`};

    time {
        color: ${({ theme }) => theme.neutral700};
        ${responsiveFonts.XXStoXS}
        margin-left: ${({ theme }) => theme.r100};
    }
`;

const Balloon =  styled.strong`
    display: flex;
    align-items: center;
    border-radius: ${({theme}) => theme.roundedCard};
    margin-left: ${({ theme }) => theme.r300};
    padding: ${({theme}) => `${theme.r100} ${theme.r150} ${theme.r100} ${theme.r200}`};
    position: relative;

    ${(props) => props.kind ? moodGama.baloons[props.kind] : moodGama.baloons.default};

    ::before {
        content: '';
        border: ${({theme}) => `${theme.r200} solid transparent`}; ;
        border-right-color: ${(props) => props.kind ? moodGama.triangles[props.kind] : moodGama.triangles.default};
        border-left: 0;
        border-bottom: 0;
        height: 0;
        left: ${({ theme }) => theme.r100};
        top: ${({theme}) => `calc(50% - ${theme.r050})`};
        position: absolute;
        width: 0;
        transform-origin: 0 0;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }
`;

export {
    MoodItemStyles,
    Balloon,
};
