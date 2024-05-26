export const calculateDiscountedPrice = (price: number, discount: number, shouldRound: boolean = false): number => {

    const discountedPrice: number = price - (price * (discount / 100));

    // Rounds to whole number if optional shouldRound property supplied, otherwise rounds down to 2 decimal places.
    return shouldRound ? Math.round(discountedPrice) : Number(Math.floor(discountedPrice * 100) / 100);

}

export const calculatePricePerDay = (totalPrice: number, totalDays: number): number => {

    return Number((totalPrice / totalDays).toFixed(2));

}