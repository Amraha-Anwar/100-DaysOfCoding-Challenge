/* You just heard that one of your guests can’t make the dinner, so you need to send out a new set of
 invitations. You’ll have to think of someone else to invite.*

/* • Start with your program from Exercise 14. Add a print statement at the end of your program stating the
 name of the guest who can’t make it.*/
/*• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
 are inviting.*/
// • Print a second set of invitation messages, one for each person who is still in your list.
var guests = ["John", "Olivia", "Tina"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Hello ".concat(guest, " please join me on dinner tomorrow at my place \n"));
}
;
var unableToAttend = "Olivia";
console.log("".concat(unableToAttend, " can't make it to dinner.\n"));
// RELACING THE GUEST
var replacedGuest = "Amelia";
guests[guests.indexOf(unableToAttend)] = replacedGuest;
// NEW INVITATION
guests.forEach(function (guest) { console.log("".concat(guest, " please join me on dinner tomorrow at my place.\n")); });
