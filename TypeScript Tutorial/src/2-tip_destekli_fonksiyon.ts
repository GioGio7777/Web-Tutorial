function F() {
    return 25
}


function F2():number {
    
    return 0
}


function F3():[number,string]{
    return[25,"asdas"]
}


const qwe = F3();

console.log(qwe)

 
function LogPerson(isim:string,soyisim:string,yas:number){

    console.log({isim,soyisim,yas})
}


LogPerson("yusuf","celik",20)


function LogPerson2(isim:string,soyisim:string,yas:number){

    return new Promise((resolve,reject) => {
        resolve(25);
    })
    
}

LogPerson("yusuf","celik",20)


function LogPerson3(parametreler:{
    isim:string,
    soyisim:string,
    yas:string
}):Promise<number>{

    return new Promise((resolve,reject) => {
        resolve(25);
    })
    
}


LogPerson3({
    isim:"yusuf",
    soyisim:"celik",
    yas:"25"
})


function Method(isim:string,tekar:number):void{

    for(let i:number = 0;i<tekar;i++){
        console.log(isim)

    }
}


Method("yusuf",3);