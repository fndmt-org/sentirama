import { generateColorSteps } from '../colorSteps';

// const matchMedia = require('match-media-mock').create();

function getViewPortDimensions() {
    return {
        w: window.screen.width,
        h: window.screen.height,
    };
}


describe('color steps functions:', () => {

    beforeEach(() => {
        const screenWidth = 300;
        const screenHeight = 300;
        Object.defineProperty(window.screen, 'width', { writable: true, configurable: true, value: screenWidth });
        Object.defineProperty(window.screen, 'height', { writable: true, configurable: true, value: screenHeight });
        // matchMedia.setConfig({ type: 'screen', width: screenWidth, height: screenHeight });
        // window.matchMedia = matchMedia;
    });

    it('getViewPortDimensions', () => {
        const dimensions = getViewPortDimensions();

        expect(dimensions).toEqual({ w: 300, h: 300 });
    });
});

test('color steps generate 3 steps', () => {
    const colorStart = 'hsla(0,100%,50%,1)';
    const colorEnd = 'hsla(120,100%,50%,1)';
    const params = {
        colorStart,
        colorEnd,
        steps: 2
    };
    const colorGenerated = generateColorSteps(params);

    const expected = [colorStart, 'hsla(40,100%,50%,1)', 'hsla(80,100%,50%,1)', colorEnd];

    expect(colorGenerated).toStrictEqual(expected);
    //expect(colorGenerated).toBe(expected);
    // expect(colorGenerated).toEqual('acolor');
});
