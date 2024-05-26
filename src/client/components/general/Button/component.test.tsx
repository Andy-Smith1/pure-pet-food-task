import { Button } from "./index";
import { Props } from "./interfaces";

import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Button', () => {

    const mockFunction: jest.Mock = jest.fn();

    const mockProps: Props = {
        text: {
            label: "Test label"
        },
        clickHandler: mockFunction
    }

    beforeEach(() => {
        mockFunction.mockClear(); // Clears mock function between tests so number of times it has been called is reset.
    })

    it('Renders successfully', () => {

        render(<Button {...mockProps} />);
        expect(screen.getAllByText(mockProps.text.label).length).toBe(1);

    });

    it('Fires clickHandler function', () => {

        render(<Button {...mockProps} />);

        fireEvent.click(screen.getByText(mockProps.text.label));

        expect(mockFunction).toHaveBeenCalledTimes(1);

    });

    it('Renders a link when when dictated by props, does not fire clickHandler function', () => {

        const linkProps: Props = Object.assign({}, mockProps, { isLink: true, linkHref: '#' })

        render(<Button {...linkProps} />, { wrapper: BrowserRouter });

        const buttonElement: HTMLElement = screen.getByRole('link'); // specifically finds anchor tag rather than element by text


        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement);

        expect(mockFunction).toHaveBeenCalledTimes(0);


    })

})