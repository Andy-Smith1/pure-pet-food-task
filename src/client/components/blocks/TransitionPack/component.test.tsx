import { render, screen } from '@testing-library/react';
import { TransitionPack } from './index';
import { Props } from './interfaces';

describe("TransitionPack", () => {

    const mockProps: Props = {
        transitionDays: '12',
        subscriptionDays: '32',
        price: '29.99',
        discount: '25',
        shouldShowDiscountLabel: true
    }

    it("Renders successfully", () => {

        render(<TransitionPack {...mockProps} />);

        expect(screen.getAllByText('transition pack').length).toBe(1);

    })

    it("Calculates and displays correct discounted price", () => {

        render(<TransitionPack {...mockProps} />);

        expect(screen.getAllByText('£22.49').length).toBe(1);

    })

    it("Calculates and displays correct price per day", () => {

        render(<TransitionPack {...mockProps} />);

        expect(screen.getAllByText('£1.19').length).toBe(1);

    })

    it("Does not display undefined/NaN if supplied invalid values", () => {

        const invalidProps: Props = {
            transitionDays: '0',
            subscriptionDays: '',
            price: '0',
            discount: '',
        }

        render(<TransitionPack {...invalidProps} />);

        expect(screen.queryByText("undefined")).toBeNull(); // queryByText returns null if element cannot be found
        expect(screen.queryByText("NaN")).toBeNull();

    })

})