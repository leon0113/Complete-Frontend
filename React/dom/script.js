const description = 'We need a new floor';
const squareMeters = 100;
const specialCoating = true;
const floorOptions = ['carpet', 'hardwood', 'tiles'];
const job = {
    ownerName: "Leon",
    maximumPrice: 5000,
    category: 'bathroom',
    newShower: true
}

// function calculatePrice(squareMeters) {
//     const price = 100 + squareMeters;
//     console.log(price);
// }

// calculatePrice(squareMeters);

const calculatePrice = function (squareMeters) {
    const price = 100 + squareMeters;
    console.log(price);
}

// calculatePrice(squareMeters)

if (500) {
    const hello = 5;
} else {
    let hi = 10;
}

console.log(hello); // const, let not accessable