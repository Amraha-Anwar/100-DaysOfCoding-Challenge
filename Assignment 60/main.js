// Question 60
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Amraha";
    var age = 17;
    var qualification = "Intermediate";
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age, ", Qualification: ").concat(qualification, "."));
        }
    };
})();
userProfile.displayInfo();
