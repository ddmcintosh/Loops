"use strict"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },

    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
licenseNo: "A1D-2NC",
registrationExpires: new Date("8-31-2023"),
capacity: 3
},

{
color: "White",
type: "Pickup Truck",
registrationState: "TX",
licenseNo: "A22-X00",
registrationExpires: new Date("9-31-2023"),
capacity: 6
},

{
color: "Red",
type: "Car",
registrationState: "CA",
licenseNo: "ABC-222",
registrationExpires: new Date("12-10-2022"),
capacity: 5
},

{
color: "Black",
type: "SUV",
registrationState: "CA",
licenseNo: "EEE-222",
registrationExpires: new Date("12-10-2021"),
capacity: 7
},

{
color: "Red",
type: "SUV",
registrationState: "TX",
licenseNo: "ZZ2-101",
registrationExpires: new Date("12-30-2022"),
capacity: 5
},

{
color: "White",
type: "Pickup Truck",
registrationState: "TX",
licenseNo: "CAC-7YT",
registrationExpires: new Date("1-31-2023"),
capacity: 5
},

{
color: "White",
type: "Pickup Truck",
registrationState: "CA",
licenseNo: "123-ABC",
registrationExpires: new Date("3-31-2023"),
capacity: 5
}

];

// what vehicles are red 
let numVehicles = vehicles.length;
let vehiclesRed = [];
for (let i = 0; i < numVehicles; i++) {
    if (vehicles[i].color == "Red") {
        vehiclesRed.push(vehicles[i].licenseNo);
        console.log(" These vehicles are red: " + vehiclesRed);
    }

//expired registrations
let expiredRegistration = [];
let currentDate = new Date();
let numDate = (Number(currentDate))

if (Number(vehicles[i].registrationExpires) < numDate) {
expiredRegistration.push(vehicles[i].licenseNo);
console.log(" These vehicles have expired registration: " + expiredRegistration);
}

// holds 6 pp 
let bigCar = [];
if (Number(vehicles[i].capacity) >= 6) {
    bigCar.push(vehicles[i].licenseNo);
    console.log(bigCar + " These cars hold 6 passengers ");
}


// license plates that end with 222
let licensePlate = [];
if (vehicles[i].licenseNo.substring(vehicles[i].licenseNo.indexOf("-") + 1) == "222") {
    licensePlate.push(vehicles[i].licenseNo);
    console.log(" These vehicles have license plates that end with 222 " + licensePlate);
}



}


