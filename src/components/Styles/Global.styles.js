import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /*
    http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video,
    button, input {
        border: 0;
        font: inherit;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }


    /* APP STYLES */

    * {
        box-sizing: border-box;
        line-height: ${props => props.theme.lineHeightB};
    }

    html,
    body {
        background-color: ${props => props.theme.colorBg};
        color: ${props => props.theme.colorText};
        height: 100%;
    }

    html {
        font-family: ${props => props.theme.fontSetBase};
        font-size: ${props => props.theme.fontSizeBase};
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-style: ${props => props.theme.fontStyleBase};
        line-height: ${props => props.theme.fontLineBase};
    }

    h1,
    h2,
    h3,
    h4{
        font-family: ${props => props.theme.fontSetTitle};
    }

    h1{
        font-size: ${props => props.theme.fontXXXL};
        margin-top: 0;
    }

    h2 {
        font-size: ${props => props.theme.fontXXL};
    }

    h3 {
        font-size: ${props => props.theme.fontXL};
    }

    h4 {
        font-size: ${props => props.theme.fontL};
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: ${props => props.theme.fontBold};
    }

    p {
        font-size: ${props => props.theme.fontB};
    }

    /* links */
    a {
        color: ${props => props.theme.colorLink || props.theme.colorMain};
        text-decoration: none;
    }

    svg {
        fill: currentColor;
    }

`;

export default GlobalStyle;
