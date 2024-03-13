import { capitalize } from "./stringUtils";

const originalString: string = "hello, world";
const capitalizedString: string = capitalize(originalString);

console.log(capitalizedString);

import greetDefault, { greetByName } from "../Modules/greeter";

greetDefault();
greetByName("Ahmed");
