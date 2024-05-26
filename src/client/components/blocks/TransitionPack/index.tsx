import { calculateDiscountedPrice, calculatePricePerDay } from "../../../helpers/maths";
import { DecorativeLabel } from "../../general/DecorativeLabel";
import { DiscountLabel } from "../../general/DiscountLabel";
import { Image } from "../../general/Image";
import { SimpleCard } from "../../general/SimpleCard"
import { Props } from "./interfaces"

export const TransitionPack = ({
    transitionDays,
    subscriptionDays,
    price,
    discount,
    shouldShowDiscountLabel
}: Props): JSX.Element => {

    const transitionDaysNum: number = parseInt(transitionDays);
    const subscriptionDaysNum: number = parseInt(subscriptionDays);
    const discountNum: number = parseInt(discount);
    const priceNum: number = parseFloat(price);

    const discountedPrice: number = calculateDiscountedPrice(priceNum, discountNum);
    const pricePerDay: number = calculatePricePerDay((discountedPrice + priceNum), (transitionDaysNum + subscriptionDaysNum));

    return (
        <div className="flex flex-col gap-4 text-xl text-center my-4">
            <SimpleCard className="flex space-between flex-col tablet:flex-row gap-4 px-8">
                <p><span className="font-bold">{transitionDaysNum} day </span>transition pack</p>
                <div className="font-roboto font-bold tracking-tighter tablet:ml-3 flex gap-1 justify-center items-end">
                    <p className="text-2xl text-pure-yellow">
                        <span className="sr-only">
                            Current price:
                        </span>
                        £{isNaN(discountedPrice) ? "" : discountedPrice.toFixed(2)}
                    </p>
                    <p className="text-zinc-300 line-through relative">
                        <span className="sr-only">
                            Previous price:
                        </span>
                        £{price}
                        <DiscountLabel labelText="50% OFF" className="absolute -top-1/4 -right-20 -rotate-[18deg]" />
                    </p>
                </div>
            </SimpleCard>

            <div className="relative w-fit mx-auto">
                <DecorativeLabel labelText="then" className="absolute top-1/3 -left-14 -rotate-[4deg]" />
                <Image altText="" imgSrc="/assets/fancy-arrow--down.png" className="h-20 w-fit" />
            </div>

            <SimpleCard className="w-fit !px-0 pb-0 self-center">
                <div className="px-6">
                    <p>Your ongoing plan</p>
                    <p className="text-base font-bold">After the transition</p>
                </div>
                <div className="flex justify-between items-end gap-6 text-lg py-3 px-6 mt-4 bg-stone-200 rounded-b-2xl">
                    <p>Every <span className="font-bold">{subscriptionDays}</span> days</p>
                    <p><span className="font-roboto font-bold tracking-tighter text-2xl">£{isNaN(pricePerDay) ? "" : pricePerDay.toFixed(2)}</span> per day</p>
                </div>
            </SimpleCard>
        </div>
    )
}