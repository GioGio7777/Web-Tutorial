 let myname = "yusuf"



let myname2: string = "Yusuf"


let ns:string |  number = "asasf" /* hem string hem number variable*/

ns = 5
ns = "ASDAG"


const c = Symbol()

const a = undefined


let b: any = 25;

function check(){
    if(typeof b === "number"){
        b.toExponential()
    }

    else if(typeof b ==="string"){
        b.length
    }

    else if (b instanceof HTMLInputElement){
        b.innerHTML = "<div></div>"

    }
}


let str :string = "sa"

let ba: number = 35

let ca:boolean  = true

let d: undefined = undefined

let e: symbol = Symbol()



/* Object */

const Person = {
    isim:"Yusuf",
    kanal: "Yusuf Çelik",
    
}


Person.isim = "yusuf"


const Person2:{
    isim:string,
    kanal:string
    bilmem:"bilmem" | "bilirim" | 'ne'

} = {
    isim:"Yusuf",
    kanal: "Yusuf Çelik",
    bilmem: "bilmem" // Sadece bilmem bilirim ve ne yapabiliriz
}


let aa: 5 | 25 | 35 = 5

/*

const input = document.querySelector("#veri") as HTMLInputElement

console.log(typeof input)

input artık HTMLInputElement tipindedir as bu işe yarar

*/ 


const dizi: (number | boolean | string)[] = ["asqrw",25,true,false]