import { useParams } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout"
import { useQuery } from "@tanstack/react-query";
import { fetchJSON } from "../../helpers/fetch";
import { OfferDetails } from "../../types/offer";
import { SimpleCard } from "../general/SimpleCard";
import { TransitionPack } from "../blocks/TransitionPack";

export const OfferPage = (): JSX.Element => {

    /**
     * Takes :days from params. Param is set in HomePage/Button component using react-router Link component
     */
    const { days } = useParams<{ days: string }>();

    /**
    * Separate endpoint set up to take a :days param and return the specific offer.
    */
    const { data: offerData, isError, isLoading } = useQuery<Record<string, OfferDetails>>({
        queryFn: () => fetchJSON(`/api/subscriptions/${days}`, 10000),
        queryKey: ["offer", days],
    });

    const price: string = offerData?.data?.price ?? "";
    const discount: string = offerData?.data?.discount ?? "";

    return (
        <PageLayout>

            {isError && <h1>Something went wrong.</h1> /** Very basic error and loading state */}
            {isLoading && <h1>Loading...</h1>}

            <div className="h-full flex justify-center items-center">
                {offerData && <TransitionPack price={price} transitionDays="12" subscriptionDays={days ?? ""} discount={discount} />}
            </div>
        </PageLayout>
    )

}