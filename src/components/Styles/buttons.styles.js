import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import responsiveFonts from './responsiveFonts.styles';
import { iconSizes } from './iconSizes.styles';

const SendMods = {
    enabled: css`
        ${({ theme }) => css`
            background-color: ${theme.buttonPrimaryBgColor
                || theme.colorMain};
            color: ${theme.buttonPrimaryTextColor
                || theme.neutral000};
            :hover {
                opacity: 0.8;
            }
        `}
    `,
    disabled: css`
        ${({ theme }) => css`
            background-color: ${({theme}) => theme.buttonDisabledBgColor
                || theme.neutral400};
            color: ${({theme}) => theme.buttonDisabledTextColor
                || theme.neutral800};
            opacity: 0.5;
        `}
    `,
}

const Send = styled.button`
    ${({ theme }) => css`
        background-clip: padding-box;
        border: 0;
        border-radius: ${theme.buttonRounded || theme.round};
        display: inline-block;
        font-size: ${({ theme }) => theme.iconSizeThumb};
        letter-spacing: inherit;
        padding: ${theme.r050};
        text-align: center;
        text-decoration: none;
        text-transform: inherit;
        ${(props) => props.disabled
            ? SendMods.disabled
            : SendMods.enabled
        }
        svg {
            height: 1em;
            width: 1em;
        }
    `}

`;

const disabled = css`
    &:disabled,
    &[disabled] {
        background: ${(props) => props.theme.buttonDisabledBg
            || props.theme.neutral100};
        border: ${(props) => props.theme.buttonDisabledBorder
            || `1px solid ${props.theme.neutral200}`};
        color: ${(props) => props.theme.buttonDisabledColor
            || props.theme.neutral200};

        svg {
            fill: ${(props) => props.theme.buttonDisabledColor
                || props.theme.neutral200};
        }
    }
`;

const focus = css`
    &:focus {
        outline: ${(props) => props.theme.outline};
        outline-offset: 0;
    }
`;

const full = {
    default: css`
        width: 100%;
    `,
    redesign: css`
        margin: ${({ theme }) => `${theme.r150} ${theme.r200}`};
        width: ${({ theme }) => `calc(100% - ${theme.r400})`};
    `,
};

const largeSize = {
    default: css`
        ${responsiveFonts.BtoL}
        padding: .9em 1.6em;
    `,
    redesign: css`
        ${responsiveFonts.LtoLX}
        padding: 1.1em;
    `,
};

const baseSize = {
    default: css`
        ${responsiveFonts.StoB}
        padding: .6em 1.2em;
    `,
    redesign: css`
        ${responsiveFonts.BtoL}
        padding: .8em;
    `,
};

const smallSize = {
    default: css`
        ${responsiveFonts.XStoS}
        padding: .5em 1em;
    `,
    redesign: css`
        ${responsiveFonts.StoB}
        padding: .6em;
    `,
};

const mods = {
    default: css`
        &,
        &:hover,
        &:visited,
        &:active {
            background-color: ${({ theme }) => theme.buttonDefaultBg || 'transparent'};
            border: ${({ theme }) => theme.buttonDefaultBorder
                || `${theme.borderWidthS} solid ${theme.neutral200}`};
            color: ${({ theme }) => theme.buttonDefaultColor || theme.neutral500};
        }
        ${disabled}
        ${focus}
    `,
    primary: css`
        &,
        &:hover,
        &:visited,
        &:active {
            background-color: ${({ theme }) => theme.buttonPrimaryBgColor
                || theme.colorMain};
            border: ${({ theme }) => theme.buttonPrimaryBorder
                || `${theme.borderWidthS} solid transparent`};
            color: ${(props) => props.theme.buttonPrimaryTextColor
                || props.theme.neutral000};
        }
        ${disabled}
        ${focus}
    `,
    primaryOver: css`
        ${({ theme }) => css`
            &:hover,
            &:active {
                background-color: ${(props) => props.theme.buttonPrimaryBgColorOver
                    || props.theme.colorMain700};
                border: ${(props) => props.theme.buttonPrimaryBorderOver
                    || `${theme.borderWidthS} solid transparent`};
                color: ${(props) => props.theme.buttonPrimaryTextColorOver
                    || props.theme.neutral100};
            }
        `}
    `,
    secondary: css`
        &,
        &:hover,
        &:visited,
        &:active {
            background-color: ${(props) => props.theme.buttonSecondaryBgColor
                || props.theme.neutral000};
            border: ${(props) => props.theme.buttonSecondaryBorder
                || `1px solid ${props.theme.neutral200}`};
            color: ${(props) => props.theme.buttonSecondaryColor
                || props.theme.neutral500};
        }
        ${disabled}
        ${focus}
    `,
    success: css`
        &,
        &:hover,
        &:visited,
        &:active {
            background-color: ${(props) => props.theme.buttonSuccessBgColor
                || props.theme.colorSuccess};
            border: ${(props) => props.theme.buttonSuccessBorder
                || '0'};
            color: ${(props) => props.theme.buttonSuccessColor
                || props.theme.neutral000};
        }
        ${disabled}
        ${focus}
    `,
    full: css`
        ${({ version }) => (version === 'B' ? full.redesign : full.default)};
    `,
    rounded: css`
        border-radius: ${(props) => props.theme.buttonRounded || props.theme.round};
    `,
    actionRounded: css`
        border-radius: ${(props) => props.theme.buttonIconsRound || props.theme.round};
    `,
    large: css`
        ${({ version }) => (version === 'B' ? largeSize.redesign : largeSize.default)};
    `,
    base: css`
        ${({ version }) => (version === 'B' ? baseSize.redesign : baseSize.default)};
    `,
    small: css`
        ${({ version }) => (version === 'B' ? smallSize.redesign : smallSize.default)};
    `,
    disabled: css`
        &,
        &:hover,
        &:visited,
        &:active {
            background: ${(props) => props.theme.buttonDisabledBg
                || props.theme.neutral100};
            border: ${(props) => props.theme.buttonDisabledBorder
                || `1px solid ${props.theme.neutral200}`};
            color: ${(props) => props.theme.buttonDisabledColor
                || props.theme.neutral200};
        }
    `,
    action: css`
        ${({ theme }) => css`
            &,
            &:visited{
                background-color: ${theme.ButtonActionBgColor || theme.neutral000};
                border: ${theme.ButtonActionBorder || `1px solid ${theme.colorMain}`};
                color: ${theme.ButtonActionColor || theme.colorMain};
                /* stylelint-disable-next-line no-descending-specificity */
                svg {
                    fill: ${theme.ButtonActionColor || theme.colorMain};
                }
            }
        `}
    `,
    actionOver: css`
        ${({ theme }) => css`
            &:hover,
            &:active {
                background-color: ${theme.ButtonActionBgColorOver || theme.colorMain};
                border: ${theme.ButtonActionBorderOver || `1px solid ${theme.neutral000}`};
                color: ${theme.ButtonActionColorOver || theme.neutral000};
                /* stylelint-disable-next-line no-descending-specificity */
                svg {
                    fill: ${theme.ButtonActionColorOver || theme.neutral000};
                }
            }

            ${disabled}
            ${focus}
        `}
    `,
};

const buttonRedisgn = css`
    letter-spacing: inherit;
    ${baseSize.redesign}
    /* stylelint-disable-next-line order/properties-alphabetical-order */
    ${mods.rounded}
`;

const ButtonBase = styled.button`
    background-clip: padding-box;
    border: 0;
    cursor: pointer;
    display: inline-block;
    margin: unset;
    outline: ${(props) => props.theme.outline};
    outline-offset: 0;
    text-align: center;
    text-decoration: none;
    text-transform: ${({ theme }) => theme.buttonTextTransform || 'uppercase'};
    transition-delay: 0;
    transition-duration: ${({ theme }) => theme.animationTimeS};
    transition-property: all;
    transition-timing-function: ease-in-out;
    /* stylelint-disable-next-line order/properties-alphabetical-order */
    ${({ version }) => (version === 'B' ? buttonRedisgn : baseSize.default)}
`;

const Button = styled(ButtonBase)`
    ${mapModifiers}
`;

function mapModifiers(props) {
    return props.mods ? props.mods.map((mod) => mods[mod]) : mods.default;
}

Button.Primary = styled(Button)`
    ${mods.primary}
    ${mods.primaryOver}
`;

Button.Booking = styled(Button.Primary)`
    ${mods.large}
    ${mods.full}
`;

Button.Common = styled(Button)`
    ${mods.large}
    ${mods.full}
    ${mods.primary}
`;

Button.CommonAlt = styled(Button)`
    ${mods.large}
    ${mods.full}
    ${mods.secondary}
`;

Button.Rounded = styled(Button)`
    ${mods.rounded}
    ${mods.primary}
`;

Button.RoundedAlt = styled(Button)`
    ${mods.rounded}
    ${mods.secondary}
`;

Button.Invert = styled(ButtonBase)`
    ${mods.rounded}
    ${mods.action}
    ${mods.actionOver}
    ${(props) => !!props.mods?.length && mapModifiers}
`;

Button.ActionDefault = styled.button`
    display: inline-block;
    height: ${({ theme }) => theme.iconDefaultSize};
    text-decoration: none;
    /* stylelint-disable-next-line order/properties-alphabetical-order */
    ${mods.actionRounded}
    width: ${({ theme }) => theme.iconDefaultSize};
    /* stylelint-disable-next-line no-descending-specificity */
    & svg {
        fill: currentColor;
    }
`;

Button.Action = styled(Button.ActionDefault)`
    ${mods.action}
    ${mods.actionOver}
`;

Button.ActionAlt = styled(Button.ActionDefault)`
    ${mods.secondary}
`;

Button.Success = styled(Button)`
    ${mods.success}
`;

Button.propTypes = {
    mods: PropTypes.arrayOf(PropTypes.oneOf(
        [
            '',
            'default',
            'primary',
            'secondary',
            'success',
            'full',
            'rounded',
            'large',
            'base',
            'small',
            'disabled',
            'action',
        ],
    )),
};

Button.defaultProps = {
    mods: ['default'],
};

export {
    Send,
    disabled,
    mods,
};
export default Button;
