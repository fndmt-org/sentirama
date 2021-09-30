/* eslint-env node, jest */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../Buttons.styles';

describe('Buttons - Classic Theme:', () => {
    describe('Buttons - first set:', () => {
        it('check default', () => {
            const wrapper = TestRenderer.create(
                <Button>Default</Button>,
            ).toJSON();

            expect(wrapper).toHaveStyleRule('text-align', 'center');
            expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
            expect(wrapper).toMatchSnapshot();
        });

        it('checks screenshot of Booking Button', () => {
            const wrapper = TestRenderer.create(
                <Button.Booking>Book</Button.Booking>,
            ).toJSON();

            expect(wrapper).toHaveStyleRule('padding', '1.1em');
            expect(wrapper).toMatchSnapshot();
        });

        it('checks screenshot of Common Button', () => {
            const wrapper = TestRenderer.create(
                <Button.Common>Common</Button.Common>,
            ).toJSON();

            expect(wrapper).toMatchSnapshot();
        });

        it('checks screenshot of Common Alt Button', () => {
            const wrapper = TestRenderer.create(
                <Button.CommonAlt>Common</Button.CommonAlt>,
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('checks screenshot of ActionDefault Button', () => {
            const wrapper = TestRenderer.create(
                <Button.ActionDefault>ActionDefault</Button.ActionDefault>,
            ).toJSON();

            expect(wrapper).toMatchSnapshot();
        });

        it('checks screenshot of Action Button', () => {
            const wrapper = TestRenderer.create(
                <Button.Action>Action</Button.Action>,
            ).toJSON();

            expect(wrapper).toMatchSnapshot();
        });

        it('checks screenshot of ActionAlt Button', () => {
            const wrapper = TestRenderer.create(
                <Button.ActionAlt>ActionAlt</Button.ActionAlt>,
            ).toJSON();

            expect(wrapper).toMatchSnapshot();
        });

        it('checks Rounded Button`s screenshot', () => {
            const wrapper = TestRenderer.create(
                <Button.Rounded>Rounded</Button.Rounded>,
            ).toJSON();

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Buttons - second set:', () => {
        it('checks disabled Button`s screenshot', () => {
            const wrapper = TestRenderer.create(
                <Button mods={['disabled']}>Disabled button</Button>,
            ).toJSON();

            expect(wrapper).toMatchSnapshot();
        });
    });
});
