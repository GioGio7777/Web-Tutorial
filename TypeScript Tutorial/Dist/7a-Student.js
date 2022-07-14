"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student2 = void 0;
class Student2 {
    isim = "yusuf"; // private değer için değerin başına # koyarız
    soyad = "";
    sinif = 0;
    #private_value = 0;
    constructor(isim, soyad, sinif) {
        this.isim = isim;
        this.soyad = soyad;
        this.sinif = sinif;
    }
    getStudentInformation() {
        return {
            isim: this.isim,
            soyad: this.soyad,
            sinif: this.sinif
        };
    }
    returnIsim() {
        return this.soyad;
    }
}
exports.Student2 = Student2;
