//Getting the cheapest phone from object using function
const phonePrice = [
    { name: 'Apple', price: 300000, camera: '50MP', Ram: '12Gb' },
    { name: 'Xiaomi', price: 370000, camera: '50MP', Ram: '12Gb' },
    { name: 'Samsung', price: 230000, camera: '50MP', Ram: '12Gb' },
    { name: 'Voda', price: 100000, camera: '50MP', Ram: '12Gb' },
    { name: 'Redmi', price: 80000, camera: '50MP', Ram: '12Gb' },
    { name: 'Vivo', price: 4000, camera: '50MP', Ram: '12Gb' },
]

function getCheapest(phonePrice) {

    let min = phonePrice[0];

    for (const phone of phonePrice) {
        // console.log(number);
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const min = getCheapest(phonePrice);
console.log("Cheapest value is: ", min);