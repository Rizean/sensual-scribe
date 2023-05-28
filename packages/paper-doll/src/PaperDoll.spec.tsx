/**
 * @jest-environment jsdom
 */

import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {PaperDoll, PaperDollProps} from './PaperDoll';
import {setupImageMock} from "./testHelpers";

describe('PaperDoll Component', () => {
    beforeAll(() => setupImageMock());
    afterEach(() => {
        cleanup();
    });

    it("renders with correct number of layers", async () => {
        const partProps = [
            {slotKey: 'key1', image: "https://via.placeholder.com/150", layer: 1},
            {slotKey: 'key2', image: "https://via.placeholder.com/150", layer: 2},
            {slotKey: 'key3', image: "https://via.placeholder.com/150", layer: 3},
            {slotKey: 'key4', image: "https://via.placeholder.com/150", layer: 4},
            {slotKey: 'key5', image: "https://via.placeholder.com/150", layer: 5},
            {slotKey: 'key6', image: "https://via.placeholder.com/150", layer: 6}
        ];
        const substitutions = {};
        const dollProps: PaperDollProps = {
            showLayers: 3,
            parts: partProps,
            imageSubstitutions: substitutions
        };

        render(<PaperDoll {...dollProps} />);

        // this is a hacky way to wait for the images to load which should be nearly instantaneous
        await screen.findByTestId('doll-key1');

        expect(screen.queryByTestId('doll-key1')).toBeInTheDocument();
        expect(screen.queryByTestId('doll-key2')).toBeInTheDocument();
        expect(screen.queryByTestId('doll-key3')).toBeInTheDocument();
        expect(screen.queryByTestId('doll-key4')).toBeInTheDocument();
        expect(screen.queryByTestId('doll-key5')).toBeInTheDocument();
        expect(screen.queryByTestId('doll-key6')).not.toBeInTheDocument();
    });

    it("substitutes images correctly", async () => {
        const partProps = [
            {slotKey: 'key1', image: "{{url1}}", layer: 1}
        ];
        const substitutions = {url1: "https://via.placeholder.com/150"};
        const dollProps: PaperDollProps = {
            // showLayers: 1,
            parts: partProps,
            imageSubstitutions: substitutions
        };

        render(<PaperDoll {...dollProps} />);
        const image = await screen.findByTestId('doll-key1');
        expect(image).toHaveAttribute('src', substitutions.url1);
    });

    it("substitutes images correctly when image prop is undefined", async () => {
        const partProps = [
            {slotKey: 'key1', image: "{{url1}}", layer: 1},
            {slotKey: 'key2', layer: 2},
        ];
        const substitutions = {url1: "https://via.placeholder.com/150"};
        const dollProps: PaperDollProps = {
            // showLayers: 1,
            parts: partProps,
            imageSubstitutions: substitutions
        };

        render(<PaperDoll {...dollProps} />);
        const image = await screen.findByTestId('doll-key1');
        expect(image).toHaveAttribute('src', substitutions.url1);
    });

    it("substitutes images correctly when prop is undefined", async () => {
        const partProps = [
            {slotKey: 'key1', image: "{{url1}}", layer: 1},
        ];
        const substitutions = {url2: "https://via.placeholder.com/150"};
        const dollProps: PaperDollProps = {
            parts: partProps,
            imageSubstitutions: substitutions
        };

        render(<PaperDoll {...dollProps} />);
        const image = await screen.findByTestId('doll-key1');
        expect(image).toHaveAttribute('src', "{{url1}}");
    });

    // Other tests could include checking the rendering of the base layer, etc.
});
