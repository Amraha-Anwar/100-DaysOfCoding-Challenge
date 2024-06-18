"use strict";
/* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that
logs a sentence about the laptop. */
let laptop = {
    make: "DELL",
    model: "X16 R2",
    year: 2024,
    describe: function () {
        console.log(`This Laptop is a ${this.make} ${this.model} and it will release in ${this.year}.`);
    }
};
laptop.describe();
