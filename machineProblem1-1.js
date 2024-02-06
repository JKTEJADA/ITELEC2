const data = [
  {
    id: 1,
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    engineSize: 1000,
    topSpeed: 186,
    features: [
      "ABS",
      "Quick Shifter",
      "LED Headlights",
      "Adjustable Suspension",
      "Riding Modes",
    ],
    price: 15000,
  },
  {
    id: 2,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    year: 2021,
    color: "Black",
    engineSize: 883,
    topSpeed: 110,
    features: [
      "Cruiser Style",
      "Belt Drive",
      "Forward Controls",
      "Custom Exhaust",
    ],
    price: 9999,
  },
  {
    id: 3,
    brand: "Kawasaki",
    model: "Ninja ZX-6R",
    year: 2023,
    color: "Green",
    engineSize: 636,
    topSpeed: 156,
    features: [
      "Quick Shifter",
      "Traction Control",
      "Slipper Clutch",
      "Adjustable Windscreen",
    ],
    price: 12000,
  },
  {
    id: 4,
    brand: "Yamaha",
    model: "MT-09",
    year: 2022,
    color: "Blue",
    engineSize: 847,
    topSpeed: 135,
    features: [
      "Naked Bike Design",
      "TFT Display",
      "Quick Shifter",
      "Adjustable Suspension",
    ],
    price: 11000,
  },
  {
    id: 5,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    color: "Yellow",
    engineSize: 1103,
    topSpeed: 211,
    features: [
      "Ohlins Suspension",
      "Brembo Brakes",
      "Power Modes",
      "Quick Shifter",
    ],
    price: 25000,
  },
  {
    id: 6,
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    color: "White",
    engineSize: 999,
    topSpeed: 186,
    features: [
      "Dynamic Traction Control",
      "Launch Control",
      "Up/Down Quick Shifter",
      "Adjustable Riding Modes",
    ],
    price: 18000,
  },
  {
    id: 7,
    brand: "Suzuki",
    model: "GSX-R750",
    year: 2022,
    color: "Black/Blue",
    engineSize: 750,
    topSpeed: 165,
    features: [
      "Race-Ready Design",
      "Brembo Monobloc Calipers",
      "Quick Shifter",
      "Traction Control",
    ],
    price: 13000,
  },
  {
    id: 8,
    brand: "Indian",
    model: "Chieftain",
    year: 2023,
    color: "Brown",
    engineSize: 1811,
    topSpeed: 115,
    features: [
      "Touring Bike",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Keyless Ignition",
    ],
    price: 22000,
  },
  {
    id: 9,
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2022,
    color: "Silver",
    engineSize: 765,
    topSpeed: 166,
    features: [
      "Brembo Brakes",
      "Quick Shifter",
      "Adjustable Suspension",
      "Triumph Shift Assist",
    ],
    price: 14000,
  },
  {
    id: 10,
    brand: "Aprilia",
    model: "Tuono V4 1100",
    year: 2024,
    color: "Red",
    engineSize: 1077,
    topSpeed: 175,
    features: [
      "Semi-Active Suspension",
      "Cornering ABS",
      "Quick Shifter",
      "Ride-By-Wire Throttle",
    ],
    price: 19000,
  },
];


function getMotorcycles() {
  return data;
}
function getMotorcycle(id) {
  return data.find((d) => d.id === id);
}

// 1
const firstMotorcycle = [getMotorcycle(1).brand, getMotorcycle(1).model, getMotorcycle(1).year]

// 2
const thirdMotorcycle = [getMotorcycle(3).brand, getMotorcycle(3).color, getMotorcycle(3).topSpeed]

// 3
const fifthMotorcycle = [getMotorcycle(5).brand, getMotorcycle(5).engineSize, getMotorcycle(5).price]

// 4 and 5
const lastMotorocycle = [getMotorcycle(10).features[1], getMotorcycle(10).features[2], ...getMotorcycle(10).features]

console.log(firstMotorcycle)
console.log(thirdMotorcycle)
console.log(fifthMotorcycle)
console.log(lastMotorocycle)


// 6
const updatedFirstMotorcycle = { ...getMotorcycle(1), features: [...getMotorcycle(1).features, "GPS Navigation"] };
console.log(updatedFirstMotorcycle);

// 7
const updatedFifthMotorcycle = { ...getMotorcycle(5), type: "Sports Bike" };
console.log( updatedFifthMotorcycle);


// 8
const updatedthirdMotorcycle = { ...getMotorcycle(3), topSpeed: getMotorcycle(3).topSpeed + 10, color: "black"};
console.log(updatedthirdMotorcycle)

// 9
const updatedMotorcycles = data.map(motorcycle => {
  const increasePercentage = motorcycle.year === 2022 ? 0.05 : -0.03;
  return { ...motorcycle, price: motorcycle.price * (1 + increasePercentage) };
});
console.log(updatedMotorcycles)

// 10
const motorcyclesWithDiscount = updatedMotorcycles.map(motorcycle => {
  return { ...motorcycle, discounted: motorcycle.price > 15000 };
});

console.log(motorcyclesWithDiscount)


// 11

const add = (a,b) => a+b

console.log(add(4,5))
//12

const greetings = name => 
  "Hello, " + name + "!";

console.log(greetings("Kiel"))
//13

const square = (x) => 
  x*x;

console.log(square(2))

// 14 - 15

const multiplyAndAdd = (a,b,c) => {let result = a * b; result += c; return result;}

console.log(multiplyAndAdd(1,2,3))
