import { render, waitFor, screen } from '@testing-library/react';
import { OfferPage } from './OfferPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from "react-router-dom";
import { PropsWithChildren } from 'react';
import fetch from 'jest-fetch-mock';

describe('OfferPage', () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false // tanstack/react query will retry fetch by default, disable this in test suite.
            }
        }
    });

    // context wrapper for react query to work properly in jest environment
    const QueryWrapper = ({ children }: PropsWithChildren): JSX.Element => {
        return (
            <QueryClientProvider client={queryClient} >
                {children}
            </QueryClientProvider>
        )
    }
    beforeEach(() => {
        fetch.resetMocks();
        queryClient.clear();
    });

    it('Renders loading state', async () => {

        (fetch as any).mockResponseOnce(JSON.stringify({ data: [] }), { status: 200 });

        render(
            <QueryWrapper>
                <OfferPage />
            </QueryWrapper>
        );
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('Renders error state', async () => {

        fetch.mockReject(() => Promise.reject("Oh no"));

        render(
            <QueryWrapper>
                <OfferPage />
            </QueryWrapper>
        );

        await waitFor(() => screen.getByText('Something went wrong.'));
    });

    it('Renders data state', async () => {

        fetch.mockResponseOnce(JSON.stringify({
            data: {
                'price': "29.99",
                'discount': "25"
            }
        }), { status: 200 });

        render(
            <QueryWrapper>
                <OfferPage />
            </QueryWrapper>, { wrapper: BrowserRouter }
        );

        await waitFor(() => screen.getByText('£29.99'));
        await waitFor(() => screen.getByText('25% OFF'));
    });
});
