// Font
const fontSourceFamilies = ['Nunito+Sans:300,400,700'];
const fontSetBase = 'Nunito Sans';
const fontSizeBase = '62.5%'; // default 10px
const fontStyleBase = 'normal';

export const fontSizes = {
    fontXXS: '1rem',
    fontXS: '1.2rem',
    fontS: '1.4rem',
    fontB: '1.6rem',
    fontL: '1.8rem',
    fontXL: '2rem',
    fontXXL: '2.4rem',
    fontXXXL: '3rem',
};

export const fontWeight = {
    fontBold: '700',
    fontRegular: '400',
    fontLight: '300',
};

export const lineHeight = {
    lineHeightXS: '1', // default titles
    lineHeightS: '1.3',
    lineHeightB: '1.5', // default font body
    lineHeightM: '1.75',
    lineHeightL: '2',
};

export const letterSpacing = {
    letterSpacing: '.05em', // default letter spacing for titles
    letterSpacingS: '.1em',
    letterSpacingM: '.125em',
    letterSpacingL: '.2em',
};

export const font = {
    fontSourceFamilies,
    fontSetBase,
    fontSizeBase,
    fontStyleBase,

    ...fontSizes,
    ...fontWeight,
    ...lineHeight,
    ...letterSpacing,
};

// Colors

export const neutrals = {
    neutral000: 'hsla(0, 0%, 100%, 1)', // #fff
    neutral050: 'hsla(0, 0%, 97.4%, 1)', // #f8f8f8
    neutral100: 'hsla(0, 0%, 90%, 1)', // #e6e6e6
    neutral200: 'hsla(0, 0%, 80%, 1)', // #cccccc
    neutral300: 'hsla(0, 0%, 70%, 1)', // #b3b3b3
    neutral400: 'hsla(0, 0%, 60%, 1)', // #999999
    neutral500: 'hsla(0, 0%, 50%, 1)', // #808080
    neutral600: 'hsla(0, 0%, 40%, 1)', // #666666
    neutral700: 'hsla(0, 0%, 30%, 1)', // #4d4d4d
    neutral800: 'hsla(0, 0%, 20%, 1)', // #333333
    neutral900: 'hsla(0, 0%, 10%, 1)', // #1a1a1a
    neutral999: 'hsla(0, 0%, 0%, 1)', // #000
    neutralTransparent000: 'hsla(0, 0%, 100%, 0)',
    neutralTransparent999: 'hsla(0, 0%, 0%, 0)',
    neutralOpacity000: 'hsla(0, 0%, 100%, .5)',
    neutralOpacity900: 'hsla(0, 0%, 10%, .5)',
    neutralOpacity999: 'hsla(0, 0%, 0%, .5)',
};

export const mainColors = {
    colorMain: 'hsla(45, 37%, 54%, 1)',
    colorMain025: 'hsla(45, 37%, 98%, 1)',
    colorMain050: 'hsla(45, 37%, 95%, 1)',
    colorMain100: 'hsla(45, 37%, 90%, 1)',
    colorMain300: 'hsla(45, 37%, 70%, 1)',
    colorMain500: 'hsla(45, 37%, 50%, 1)',
    colorMain700: 'hsla(45, 37%, 30%, 1)',
    colorMain900: 'hsla(45, 37%, 10%, 1)',
};

export const customColors = {
    colorCustom: 'hsla(230, 95%, 37%, 1)',
    colorCustom100: 'hsla(230, 95%, 90%, 1)',
    colorCustom300: 'hsla(230, 95%, 70%, 1)',
    colorCustom500: 'hsla(230, 95%, 50%, 1)',
    colorCustom700: 'hsla(230, 95%, 30%, 1)',
    colorCustom900: 'hsla(230, 95%, 10%, 1)',
};

export const successColors = {
    colorSuccess: 'hsla(84, 50%, 45%, 1)',
    colorSuccess100: 'hsla(84, 50%, 90%, 1)',
    colorSuccess300: 'hsla(84, 50%, 70%, 1)',
    colorSuccess500: 'hsla(84, 50%, 50%, 1)',
    colorSuccess700: 'hsla(84, 50%, 30%, 1)',
    colorSuccess900: 'hsla(84, 50%, 10%, 1)',
};

export const errorColors = {
    colorError: 'hsla(4, 60%, 50%, 1)',
    colorError100: 'hsla(4, 60%, 90%, 1)',
    colorError300: 'hsla(4, 60%, 70%, 1)',
    colorError500: 'hsla(4, 60%, 50%, 1)',
    colorError700: 'hsla(4, 60%, 30%, 1)',
    colorError900: 'hsla(4, 60%, 10%, 1)',
};

export const warningColors = {
    colorWarning: 'hsla(54, 100%, 67%, 1)',
    colorWarning100: 'hsla(54, 100%, 90%, 1)',
    colorWarning300: 'hsla(54, 100%, 70%, 1)',
    colorWarning500: 'hsla(54, 100%, 50%, 1)',
    colorWarning700: 'hsla(54, 100%, 30%, 1)',
    colorWarning900: 'hsla(54, 100%, 10%, 1)',
};

// Colors
export const colors = {
    ...neutrals,
    ...mainColors,
    ...customColors,
    ...successColors,
    ...errorColors,
    ...warningColors,

    colorGoodMoodIcon: 'hsla(145, 63%, 35%, 1)',
    colorBadMoodIcon: 'hsla(28, 86%, 61%, 1)',
};

const layers = {
    zBottom: '-1',
    zBase: '0',
    zBaseTop: '1',
    zBaseup: '100',
    zMediumdown: '499',
    zMedium: '500',
    zMediumup: '501',
    zSuperior: '1000',
    zTop: '1200',
    zModal: '9999',
};

const opacity = {
    opacity000: '0',
    opacity001: '.01',
    opacity012: '.12',
    opacity016: '.16',
    opacity020: '.2',
    opacity025: '.25',
    opacity030: '.3',
    opacity050: '.5',
    opacity075: '.75',
    opacity100: '1',
};

const boxShadowRhythm = {
    boxShadow010: '.1rem',
    boxShadow020: '.2rem',
    boxShadow030: '.3rem',
    boxShadow060: '.6rem',
    boxShadow100: '1rem',
    boxShadow120: '1.2rem',
    boxShadow140: '1.4rem',
    boxShadow150: '1.5rem',
    boxShadow190: '1.9rem',
    boxShadow200: '2rem',
    boxShadow280: '2.8rem',
    boxShadow380: '3.8rem',
    boxShadowBaseColor: 'hsl(0, 0%, 0%)',
};

const boxShadowOpacity = {
    boxShadowopacity000: `hsla(0, 0%, 0%, ${opacity.opacity000})`,
    boxShadowopacity012: `hsla(0, 0%, 0%, ${opacity.opacity012})`,
    boxShadowopacity016: `hsla(0, 0%, 0%, ${opacity.opacity016})`,
    boxShadowopacity020: `hsla(0, 0%, 0%, ${opacity.opacity020})`,
    boxShadowopacity025: `hsla(0, 0%, 0%, ${opacity.opacity025})`,
    boxShadowopacity030: `hsla(0, 0%, 0%, ${opacity.opacity030})`,
    boxShadowopacity075: `hsla(0, 0%, 0%, ${opacity.opacity075})`,
};

const boxShadow = {
    boxShadowBottom0: `0 ${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}`,

    boxShadowBottom1: `0 ${boxShadowRhythm.boxShadow010} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}, 0 ${boxShadowRhythm.boxShadow010}
    ${boxShadowRhythm.boxShadow020} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom2: `0 ${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow060}
    ${boxShadowOpacity.boxShadowopacity016}, 0 ${boxShadowRhythm.boxShadow030}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom3: `0 ${boxShadowRhythm.boxShadow100} ${boxShadowRhythm.boxShadow200}
    ${boxShadowOpacity.boxShadowopacity020}, 0 ${boxShadowRhythm.boxShadow060}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom4: `0 ${boxShadowRhythm.boxShadow140} ${boxShadowRhythm.boxShadow280}
    ${boxShadowOpacity.boxShadowopacity025}, 0 ${boxShadowRhythm.boxShadow100}
    ${boxShadowRhythm.boxShadow100} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowBottom5: `0 ${boxShadowRhythm.boxShadow190} ${boxShadowRhythm.boxShadow380}
    ${boxShadowOpacity.boxShadowopacity030}, 0 ${boxShadowRhythm.boxShadow150}
    ${boxShadowRhythm.boxShadow120} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowTop0: `0 -${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}`,

    boxShadowTop1: `0 -${boxShadowRhythm.boxShadow010} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}, 0 -${boxShadowRhythm.boxShadow010}
    ${boxShadowRhythm.boxShadow020} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop2: `0 -${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow060}
    ${boxShadowOpacity.boxShadowopacity016}, 0 -${boxShadowRhythm.boxShadow030}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop3: `0 -${boxShadowRhythm.boxShadow100} ${boxShadowRhythm.boxShadow200}
    ${boxShadowOpacity.boxShadowopacity020}, 0 -${boxShadowRhythm.boxShadow060}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop4: `0 -${boxShadowRhythm.boxShadow140} ${boxShadowRhythm.boxShadow280}
    ${boxShadowOpacity.boxShadowopacity025}, 0 -${boxShadowRhythm.boxShadow100}
    ${boxShadowRhythm.boxShadow100} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowTop5: `0 -${boxShadowRhythm.boxShadow190} ${boxShadowRhythm.boxShadow380}
    ${boxShadowOpacity.boxShadowopacity030}, 0 -${boxShadowRhythm.boxShadow150}
    ${boxShadowRhythm.boxShadow120} ${boxShadowOpacity.boxShadowopacity020}`,
};

const rhythm = {
    r010: '.1rem',
    r025: '.25rem',
    r050: '.5rem',
    r075: '.75rem',
    r100: '1rem',
    r150: '1.5rem',
    r200: '2rem',
    r300: '3rem',
    r400: '4rem',
    r600: '6rem',
    r800: '8rem',
    r1000: '10rem',
    r1200: '12rem',
    r1600: '16rem',
    r2000: '20rem',
    r2500: '25rem',
};

const animationTime = {
    animationTimeS: '300ms',
    animationTimeM: '500ms',
    animationTimeL: '700ms',
};

const borders = {
    borderWidthS: '.1rem',
    borderWidthM: '.2rem',
    borderWidthL: '.3rem',
};

export const formColors = {
    formFieldBackgorund: colors.neutral000,
    formLabelColor: colors.neutral500,
    formFieldColor: colors.neutral800,
    formFieldColorFocus: colors.neutral800,
};

export const formSettings = {
    formFieldBorderRadius: rhythm.r300,
    formFieldBorder: `${borders.borderWidthS} solid ${formColors.formFieldColor}`,
    formFieldBorderFocus: `${borders.borderWidthM} solid ${formColors.formFieldColorFocus}`,
    formFieldRound: rhythm.r050,
};

export const form = {
    ...formColors,
    ...formSettings,
};

const defaultThumbSize = '4.4rem';

export const icons = {
    iconsSizeXXS: '1rem',
    iconsSizeXS: '1.4rem',
    iconsSizeS: '1.6rem',
    iconsSizeB: '1.8rem',
    iconsSizeM: '2rem',
    iconsSizeMM: '2.4rem',
    iconsSizeML: '2.8rem',
    iconsSizeL: '3.6rem',
    iconSizeThumb: defaultThumbSize,
};

export const imageSizes = {
    logoDefaultHeight: '5rem',
    imageCardSize: '8rem',
    imageThumbSize: '14rem',
    imagePreviewBaseSize: '17.5rem',
    imagePreviewLSize: '22rem',
    imagePreviewXLSize: '31rem',
    imageBackgroundSize: '24rem',
};

export const imageMods = {
    ...imageSizes,
    imageBGOverlay: `${colors.neutralOpacity999}`,
    imageBGradientTop: `linear-gradient(to top, ${colors.neutralTransparent999}, ${colors.neutralOpacity900})`,
    imageBGradientBottom: `linear-gradient(to bottom, ${colors.neutralTransparent999}, ${colors.neutralOpacity900})`,
};

export const images = {
    ...imageSizes,
    ...imageMods,
};

const base = {

    round: '2.5rem',
    roundedCard: '1rem',
    /* Icon in button defaut size */
    /* text shadow default fallback for tex over images */
    textShadow: `0 .1rem .3rem ${boxShadowOpacity.boxShadowOpacity025}`,

    /* DON'T DELETE  optional variables [start] */
    /* Typos */
    // fontSetTitle: 'Playfair Display, serif;',
    /* Colors */
    colorBg: colors.neutral000,
    colorText: colors.neutral900,
    colorLink: colors.colorCustom,
    /* buttons */
    // buttonPrimaryTextColor: colors.neutral000,
    // buttonSecondaryTextColor: colors.colorMid,
    // buttonPrimaryBgColor: colors.colorMain,
    // buttonSecondaryBgColor: colors.neutral000,
    // buttonPrimaryBorder: 0,
    // buttonSecondaryBorder: `1px solid ${colors.colorAlmostLight}`
    // buttonTextTransform: `1px solid ${colors.colorAlmostLight}`
    // outline: `1px solid ${colors.neutral500}`,
    // outlineDark: `1px solid ${colors.neutral200}`,
    // outlineLight: `1px solid ${colors.neutral200}`,
    /* DON'T DELETE  optional variables [end] */
    outline: 'none',
    lineHeightField: defaultThumbSize,
};

const themeDefault = {
    ...font,
    ...colors,
    ...layers,
    ...opacity,
    ...animationTime,
    ...boxShadow,
    ...rhythm,
    ...borders,
    ...form,
    ...icons,
    ...images,
    ...base,
};

export default themeDefault;
