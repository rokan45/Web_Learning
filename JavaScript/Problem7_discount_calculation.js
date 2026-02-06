/*function signature/sample */
function newPrice(currentPrice, discount) {


    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";

    }
    else if (discount < 0 || discount > 100) {
        return "Invalid"
    } else {
        let discountPrice = (currentPrice * discount) / 100;

        const finalPrice = currentPrice - discountPrice;
        return finalPrice.toFixed(3);
    }

}
console.log(newPrice(2000, 15));