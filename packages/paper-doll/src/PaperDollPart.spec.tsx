/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaperDollPart } from './PaperDollPart';
// import { prettyDOM } from '@testing-library/react';
import {setupImageMock} from "./testHelpers";

describe('PaperDollPart Component', () => {
    beforeAll(() => setupImageMock());
    afterEach(() => {
        cleanup();
    });

    it("renders without image if image source is not valid", async () => {
        const fakeSrc = "fakeSource.jpg";
        const partProps = {
            slotKey: 'key',
            image: fakeSrc
        };

        render(<PaperDollPart {...partProps} />);
        await screen.queryByTestId('doll-key');
        expect(screen.queryByTestId('doll-key')).toBeNull();
    });

    it("renders with image if image source is valid", async () => {
        const validSrc = "https://via.placeholder.com/150";
        const partProps = {
            slotKey: 'key',
            image: validSrc
        };

        render(<PaperDollPart {...partProps} />);
        const image = await screen.findByTestId('doll-key');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', validSrc);
    });


    it("renders without image if display prop is set to false", async () => {
        const validSrc = "https://via.placeholder.com/150";
        const partProps = {
            slotKey: 'key',
            image: validSrc,
            display: false
        };

        render(<PaperDollPart {...partProps} />);
        const image = await screen.findByTestId('doll-key');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', validSrc);
        expect(image).toHaveStyle('display: none');
    });

    it("has correct style properties when position is relative", async () => {
        const validSrc = "https://via.placeholder.com/150";
        const partProps = {
            slotKey: 'base',
            image: validSrc
        };

        render(<PaperDollPart {...partProps} />);
        const image = await screen.findByTestId('doll-base');
        expect(image).toHaveStyle('position: relative');
    });

    it("has correct style properties when position is absolute", async () => {
        const validSrc = "https://via.placeholder.com/150";
        const partProps = {
            slotKey: 'key',
            image: validSrc
        };

        render(<PaperDollPart {...partProps} />);
        const image = await screen.findByTestId('doll-key');
        expect(image).toHaveStyle('position: absolute');
    });

    it("throws an error if slotKey is not provided", async () => {
        const partProps = {
            image: "https://via.placeholder.com/150"
        };

        // @ts-ignore - intentionally passing in invalid props
        const { container } = render(<PaperDollPart {...partProps} />);
        expect(container.innerHTML).toBe("");
    });

    it("does not render an image if the image fails to load", async () => {
        const fakeSrc = "fakeSource.jpg"; // This source will trigger the onError event in your mock
        const partProps = {
            slotKey: 'key',
            image: fakeSrc
        };

        render(<PaperDollPart {...partProps} />);
        const result = await screen.queryByTestId('doll-key');
        expect(result).toBeNull();
    });
});
