"use strict";
function F() {
    return 25;
}
function F2() {
    return 0;
}
function F3() {
    return [25, "asdas"];
}
const qwe = F3();
console.log(qwe);
function LogPerson(isim, soyisim, yas) {
    console.log({ isim, soyisim, yas });
}
LogPerson("yusuf", "celik", 20);
function LogPerson2(isim, soyisim, yas) {
    return new Promise((resolve, reject) => {
        resolve(25);
    });
}
LogPerson("yusuf", "celik", 20);
function LogPerson3(parametreler) {
    return new Promise((resolve, reject) => {
        resolve(25);
    });
}
LogPerson3({
    isim: "yusuf",
    soyisim: "celik",
    yas: "25"
});
function Method(isim, tekar) {
    for (let i = 0; i < tekar; i++) {
        console.log(isim);
    }
}
Method("yusuf", 3);
