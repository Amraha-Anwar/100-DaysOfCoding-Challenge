//Question 61
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["motorcycles"] = 0] = "motorcycles";
    vehicles[vehicles["cars"] = 1] = "cars";
    vehicles[vehicles["trucks"] = 2] = "trucks";
})(vehicles || (vehicles = {}));
console.log(vehicles.trucks);
