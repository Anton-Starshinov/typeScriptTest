// const button = document.querySelector("button")! as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// let age: number;
// let trc: string;
// let toggle: boolean;
// let empty: null;
// let notInitialize: undefined;
// let callback: (a: number) => number;

// age = 50;
// trc = "Max";
// toggle = true;
// empty = null;
// notInitialize = undefined;
// callback = (a) => {
//   return 100 + a;
// };

// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

// let person: [string, number];
// person = ["Max", 21];

// enum Status {
//   LOADING,
//   READY,
// }

// const load = { status: Status.LOADING };

// if (load.status === Status.LOADING) {
//   console.log("Loading");
// }

// if (load.status === Status.READY) {
//   console.log("Ready");
// }

// let union: string | number;
// union = 10;
// union = 'string';

// let literal: "enable" | "disable";
// literal = "enable";
// literal = "disable";

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: string;
//     updateAt: string;
//   };
// };

// const page1: Page = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: "2021-01-01",
//     updateAt: "2021-05-01",
//   },
// };

// const page2: Page = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
