interface Person3 {

    isim:string,
    soyad:string
}


const Yusuf:Person3 = {
    isim:"yusuf",
    soyad:"celik"
}


type FunctionReturnsBoolean = (id:string,password:string) => boolean


const fun : FunctionReturnsBoolean = (id,password) => {
    return true
    
}



interface Ifunction {
    (isim:string,tekrar:number):void;
    (isim:string,tekrar:number):boolean;


}


const myFunc:Ifunction = (isim,tekrar) => {
    return true;

}


myFunc("yusuf",5)

interface AnotgerFunction extends Ifunction {
    (yas:number,tekrar:number):number;
}

