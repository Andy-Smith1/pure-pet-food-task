import { useQuery } from "@tanstack/react-query";
import { Button } from "../general/Button";
import { PageLayout } from "../layout/PageLayout"
import { Link } from "react-router-dom";
import { fetchJSON } from "../../helpers/fetch";

export const HomePage = (): JSX.Element => {

    /**
     * Tanstack/React Query used for data fetching and as an async state management tool.
     * Simplifies managing error & loading state and avoids bloated useEffect pattern
     */
    const { data, isLoading, isError } = useQuery({
        queryFn: () => fetchJSON(`/api/subscriptions`, 10000),
        queryKey: ["subscriptions"]
    });

    const subscriptionDays: string[] = data?.data;

    return (
        <PageLayout>

            {isError && <h1>Something went wrong.</h1> /** Very basic error and loading state */}
            {isLoading && <h1>Loading...</h1>}

            <div className="h-full flex flex-wrap flex-col tablet:flex-row gap-4 justify-center items-center">
                {
                    // Map through all possible subscriptions returned via API as opposed to two static options.
                    subscriptionDays && subscriptionDays.map((day: string, index: number) => <Button key={index} buttonStyle="secondary" isLink={true} linkHref={`/offer/${day}`} text={{ label: ` Sign up ${day} days` }} />)
                }
            </div>

        </PageLayout>
    )
}