import { useParams } from "react-router-dom";
import { PageLayout } from "../../layout/PageLayout.js"
import { useQuery } from "@tanstack/react-query";
import { fetchJSON } from "../../../helpers/fetch.js";
import { OfferDetails } from "../../../types/offer.js";
import { TransitionPack } from "../../blocks/TransitionPack/index.js";
import { FETCH_TIMEOUT } from "../../../constants/fetch.js";

export const OfferPage = (): JSX.Element => {

    /**
     * Takes :days from params. Param is set in HomePage/Button component using react-router Link component
     */
    const { days } = useParams<{ days: string }>();

    /**
    * Separate endpoint set up to take a :days param and return the specific offer.
    */
    const { data: offerData, isError, isLoading } = useQuery<Record<string, OfferDetails>>({
        queryFn: () => fetchJSON(`/api/subscriptions/${days}`, FETCH_TIMEOUT),
        queryKey: ["offer", days],
    });

    const price: string = offerData?.data?.price ?? "";
    const discount: string = offerData?.data?.discount ?? "";

    return (
        <PageLayout>

            {isError && <h1>Something went wrong.</h1> /** Very basic error and loading state */}
            {isLoading && <h1>Loading...</h1>}

            <div className="h-full flex justify-center items-center">
                {offerData && <TransitionPack price={price} transitionDays="12" subscriptionDays={days ?? ""} discount={discount} shouldShowDiscountLabel={true} />}
            </div>
        </PageLayout>
    )

}