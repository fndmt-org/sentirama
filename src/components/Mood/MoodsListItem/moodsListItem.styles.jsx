import styled, { css } from 'styled-components';

import { ReactComponent as PencilIcon }  from './../../../assets/icons/24/edit.svg';
import { iconSizes } from './../../Styles/iconSizes.styles';
import mediaQueries from './../../Styles/mediaQueries.styles';

const MoodsListItemWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: ${theme.r150} ${theme.r075};

        .role {
            margin-inline-start: ${theme.r050};
        }

        .mood {
            display: flex;
            align-items: center;
            border-radius: ${theme.buttonRounded || theme.round};
            position: relative;
            padding: ${theme.r100};
            padding-inline-end: ${theme.r200};
            color: ${theme.neutral000};
            margin-inline-start: ${theme.r150};
            background-color: ${props => props.color};
            border: 2px solid ${theme.neutralTransparent000};

            svg {
                width: ${theme.r400};
            }
        }

        button {
            color: ${theme.colorCustom500};
        }

        .time-ago {
            font-size: ${theme.fontXS};
            color: ${theme.colorMain700};
            margin-inline-start: ${theme.r050};
        }

        &.mode-average {
            .username {
                > span {
                    color: ${theme.neutral000};
                }
            }

            .mood {
                border: 2px solid ${theme.neutral000};
                background: ${theme.neutralTransparent000};
            }

            button {
                color: ${theme.neutral000};
            }

            .time-ago {
                color: ${theme.neutral000};
            }
        }
    `}
`;
 
const EditButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.neutralTransparent000};
        font-size: ${theme.fontB};
        display: flex;
        align-items: center;
        text-decoration: underline;
        margin-inline-start: ${theme.r150};

        :hover {
            text-decoration: none;
        }

        @media ${mediaQueries.s} {
            margin-top: inherit;
            margin-left: ${theme.r200};
            margin-right: inherit;
        }
    `}
`;

const PencilIconStyles = styled(PencilIcon)`
    ${({ theme }) => css`
        ${iconSizes.M}
        margin-right: ${theme.r050};
    `}
`;

export {
    MoodsListItemWrapper,
    EditButton,
    PencilIconStyles,
};