import styled, { css } from 'styled-components';
import { Typeahead } from 'react-bootstrap-typeahead'

import responsiveFonts from '../Styles/responsiveFonts.styles';
import mediaQueries from '../Styles/mediaQueries.styles';
import { svgSizes } from '../Styles/svgSizes.styles';
import { InputStyleBase } from '../Styles/form.styles';

const AddMoodWrapper = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${theme.neutralOpacity900 };
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    `}
`;

const AddMoodCard = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.neutral050 };
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

const Input = styled.input`
    ${InputStyleBase}
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
    AddMoodCard,
    AddMoodWrapper,
    EmojiSelect,
    EmojiSet,
    Input,
}
