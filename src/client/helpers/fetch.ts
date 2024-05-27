import { FetchOptions } from "../types/fetch";

/**
 * Generic wrapper for Fetch which will reject on timeOut
 */
export const fetchWithTimeOut = (
    url: string,
    timeOut: number,
    options?: FetchOptions
): Promise<any> => {
    return Promise.race([
        fetch(url, options).then((response: Response) => {
            return response
        }),
        new Promise((_, reject) =>
            setTimeout(
                () => reject(new Error('The request timed out')),
                timeOut
            )
        ),
    ])
}

/**
 * Custom wrapper for Fetch to abstract error handling and JSON parsing
 */
export const fetchJSON = (
    url: string,
    timeOut: number,
    options?: FetchOptions,
): Promise<any> => {
    return fetchWithTimeOut(url, timeOut, options)
        .then(
            (response: Response) => {

                /**
                 * Handle network errors
                 */
                if (!response.ok) {

                    const message = `${response.status}: ${response.statusText}`;

                    return new Error(message);

                }

                /**
                 * Parse as JSON and return
                 */
                return response.json();
            }
        )
        .catch((error: Error) => {

            throw new Error(error.message)

        })
}