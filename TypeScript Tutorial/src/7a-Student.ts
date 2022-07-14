export interface IStudent {
    isim:string,
    soyad:string,
    sinif:number

    getStudentInformation():{
        isim:IStudent["isim"]
        soyad:IStudent["soyad"]
        sinif:IStudent["sinif"]
    }
}


export class Student2 implements IStudent{

    isim:string = "yusuf" // private değer için değerin başına # koyarız
    soyad:string = ""
    sinif:number = 0;

    #private_value = 0
    constructor(isim:string,soyad:string,sinif:number) { // eğer public isim:string yaparsak örneğin this.isim = isim yapmamıza gerek yok

        this.isim = isim
        this.soyad = soyad
        this.sinif = sinif
    }


        getStudentInformation() {
            return {
                isim  : this.isim,
                soyad : this.soyad,
                sinif : this.sinif
            }
        }
        
    
  


    returnIsim():string {
        return this.soyad;
        
    }
}