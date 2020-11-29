/* eslint-env node, jest */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
// import 'jest-styled-components';

import GlobalStyle from '../global.styles';
import themeDefaultImport from '../basicVariables.styles';

// to test global styles in styled components nedd to create a snapshot of head html tag
// eslint-disable-next-line max-len
// https://spectrum.chat/styled-components/general/testing-createglobalstyle-with-passed-props~660bbad2-babe-4ada-bf59-23d3122f25ab

describe('GlobalStyles', () => {

    let themeDefault;

    beforeEach(() => {
        themeDefault = Object.assign({}, themeDefaultImport);
    });

    it('checks screenshot of main css resets without theme', () => {
        themeDefault = {};
        renderer.create(
            <GlobalStyle theme={themeDefault}/>,
        ).toJSON();

        expect(document.head).toMatchSnapshot();
    });

    it('checks screenshot of Mobilis´ default theme css resets', () => {
        renderer.create(
            <GlobalStyle theme={themeDefault} />,
        ).toJSON();

        expect(document.head).toMatchSnapshot();
    });
});
