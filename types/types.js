var temperature = 26;
var welcomeMessage = "Welcome !";
var isLoggedIn = true;
var Colors = ["red", "yellow", "green"];
var userInfo = ["Ahmed", 99];
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
var s = Season.Spring;
function logValue(a) {
    console.log(a);
}
function noReturn() {
    console.log("No return");
}
