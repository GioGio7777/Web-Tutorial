"use strict";
let myname = "yusuf";
let myname2 = "Yusuf";
let ns = "asasf"; /* hem string hem number variable*/
ns = 5;
ns = "ASDAG";
const c = Symbol();
const a = undefined;
let b = 25;
function check() {
    if (typeof b === "number") {
        b.toExponential();
    }
    else if (typeof b === "string") {
        b.length;
    }
    else if (b instanceof HTMLInputElement) {
        b.innerHTML = "<div></div>";
    }
}
let str = "sa";
let ba = 35;
let ca = true;
let d = undefined;
let e = Symbol();
/* Object */
const Person = {
    isim: "Yusuf",
    kanal: "Yusuf Çelik",
};
Person.isim = "yusuf";
const Person2 = {
    isim: "Yusuf",
    kanal: "Yusuf Çelik",
    bilmem: "bilmem" // Sadece bilmem bilirim ve ne yapabiliriz
};
let aa = 5;
/*

const input = document.querySelector("#veri") as HTMLInputElement

console.log(typeof input)

input artık HTMLInputElement tipindedir as bu işe yarar

*/
const dizi = ["asqrw", 25, true, false];
