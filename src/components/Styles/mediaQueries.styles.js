export default {
    phones: 'only screen and (max-width: 479px)',
    phonesLargeW: 'only screen and (min-width: 400px)',
    phonesLargeH: 'only screen and (min-height: 668px)', // one pixel more than iphone6
    tablets: 'only screen and (min-width: 768px) and (max-width: 959px)',
    iphone4: 'all and (device-width: 320px) and (device-height: 480px)',
    iphone5: 'all and (device-width: 320px) and (device-height: 568px)',

    /* iphone 6, 7, 8 */
    iphone678: `only screen and (device-width : 375px)
    and (device-height : 667px)
    and (-webkit-device-pixel-ratio : 2)`,

    /* iphone 6+, 7+, 8+ */
    iphone678p: `only screen and (device-width : 414px)
    and (device-height : 736px)
    and (-webkit-device-pixel-ratio : 3)`,

    /* iphone X */
    iphoneX: `only screen and (device-width : 375px)
    and (device-height : 812px)
    and (-webkit-device-pixel-ratio : 3)`,

    ipad: `all and (device-width: 768px)
    and (device-height: 1024px)`,

    ipadPortrait: `all and (device-width: 768px) and
    (device-height: 1024px) and (orientation:portrait)`,

    ipadLandscape: `all and (device-width: 768px) and
    (device-height: 1024px) and (orientation:landscape)`,

    xs: `only screen and (max-width: 600px)`,

    s: `only screen and (min-width: 600px)`,

    m: `only screen and (min-width: 768px)`,

    l: `only screen and (min-width: 992px)`,

    xl: `only screen and (min-width: 1200px)`,
};
