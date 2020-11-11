import styled, { css } from 'styled-components';
import { Typeahead } from 'react-bootstrap-typeahead'

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';
import { svgSizes } from './common.styles';

const CardBase = styled.div`
    background-clip: padding-box;
    border: 0;
    display: flex;
    ${responsiveFonts.BtoL}
    align-items: center;
    letter-spacing: inherit;
    text-transform: inherit;
    padding:${({ theme }) => `${theme.r100}`};
    svg {
        ${svgSizes.default}
    }
`;

const AddMoodCard = styled(CardBase)`
    ${({ theme }) => css`
        background-color: ${theme.neutral050 };
        bottom: 0;
        padding: ${theme.r200};
        width: 100%;

        label {
            margin-right: ${theme.r100 };
            color: ${theme.neutral600 };
        }

        & form {
            align-items: center;
            display: flex;
            flex-flow: column;
            width: 100%;
            text-align: center;
            ${responsiveFonts.BtoL}

            @media ${mediaQueries.s} {
                flex-flow: row;
                flex-wrap: wrap;
                text-align: left;
            }

            h4 {
                font-weight: ${theme.fontBold};
                margin-right: ${theme.r100};
                margin-bottom: ${theme.r100};

                width: 100%;

                @media ${mediaQueries.s} {
                    width: inherit;
                    margin-bottom: 0;
                }
            }

            button {
                @media ${mediaQueries.xs} {
                    width: 21rem;
                }
                @media ${mediaQueries.s} {
                    margin-left: ${theme.r100};
                }
            }
        }
    `}
`;

const InputStyleBase = css`
    ${({ theme }) => css`
        background: ${theme.formFieldBackgorund};
        border: ${theme.formFieldBorder};
        border-radius: ${theme.formFieldBorderRadius};
        background-color: transparent;
        color: ${theme.formFieldColor};
        outline: ${theme.outline};
        padding: ${theme.r100} ${theme.r200};
        text-align: start;
        margin: ${theme.r100};
        @media ${mediaQueries.s} {
            margin-left: 0;
        }
        ${responsiveFonts.StoB}
    `}
`;

const TypeaheadStyled = styled(Typeahead)`
    input {
        ${InputStyleBase}
    }
    z-index: ${({ theme }) => theme.zBaseTop};
`;

const TypeaheadMenu = styled.div``;
const TypeaheadMenuItem = styled.span``;

const Input = styled.input`
    ${InputStyleBase}
`;

const buttonsMods = {
    enabled: css`
        background-color: ${({theme}) => theme.buttonPrimaryBgColor
            || theme.colorMain};
        color: ${({theme}) => theme.buttonPrimaryTextColor
            || theme.neutral000};
        :hover {
            opacity: 0.8;
        }
    `,
    disabled: css`
        background-color: ${({theme}) => theme.buttonDisabledBgColor
            || theme.neutral400};
        color: ${({theme}) => theme.buttonDisabledTextColor
            || theme.neutral800};
        opacity: 0.5;
    `,
}

const Button = styled.button`
    background-clip: padding-box;
    border: 0;
    border-radius: ${({theme}) => theme.buttonRounded || theme.round};
    display: inline-block;
    font-size: 0;
    letter-spacing: inherit;
    padding:${({ theme }) => `${theme.r050}`};
    text-align: center;
    text-decoration: none;
    text-transform: inherit;
    ${(props) => props.disabled
        ? buttonsMods.disabled
        : buttonsMods.enabled
    }
    svg {
        ${svgSizes.default}
    }
`;

const EmojiSelect = styled.label`
    display: flex;
    position: relative;
    svg {
        ${svgSizes.big}
        ${(props) => props.className === 'active' && `fill: ${props.theme.colorMain}`}
    }
    .emoji-radio{
        display: none;
    }
`;

const EmojiSet = styled.div`
    display: flex;
`;

export {
    Button,
    CardBase,
    EmojiSelect,
    EmojiSet,
    Input,
    AddMoodCard,
    TypeaheadMenu,
    TypeaheadMenuItem,
    TypeaheadStyled
};
