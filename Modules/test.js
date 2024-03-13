"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtils_1 = require("./stringUtils");
var originalString = "hello, world";
var capitalizedString = (0, stringUtils_1.capitalize)(originalString);
console.log(capitalizedString);
var greeter_1 = require("../Modules/greeter");
(0, greeter_1.default)();
(0, greeter_1.greetByName)("Ahmed");
