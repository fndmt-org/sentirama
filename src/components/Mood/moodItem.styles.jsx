import styled, { css } from 'styled-components';

import responsiveFonts from '../Styles/responsiveFonts.styles';
import { CardBase } from './mood.styles';

const moodGama = {
    baloons: {
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
        good: css`${({theme}) => theme.colorSuccess700};`,
        neutral: css`${({theme}) => theme.colorWarning};`,
        bad: css`${({theme}) => theme.colorError700};`
    }
}

const MoodItemStyles = styled(CardBase)`
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
    padding: ${({theme}) => `${theme.r100} ${theme.r150} ${theme.r100} ${theme.r050}`};
    position: relative;

    ${(props) => moodGama.baloons[props.kind]};

    ::before {
        content: '';
        border: ${({theme}) => `${theme.r200} solid transparent`}; ;
        border-right-color: ${(props) => moodGama.triangles[props.kind]};
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
