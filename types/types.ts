export{}
let temperature : number = 26;
let welcomeMessage : string = "Welcome !";
let isLoggedIn : boolean = true;

let Colors: string[] = ["red","yellow","green"];
let userInfo: [string,number] = ["Ahmed",99];

enum Season{Spring,Summer,Autumn,Winter};
let s: Season = Season.Spring;

function logValue(a:any):void{
    console.log(a);
}

function noReturn() : void{
    console.log("No return");
}