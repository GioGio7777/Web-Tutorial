type Person = {

    isim?:string; // Soru işareti koyduklarımız opsiyonel olur
    soyad:string;
    yas:string
    durum:string,
};


const obj: Person = {
    soyad:"celik",
    yas:"25",
    durum:"asgfasg"
}


type Colors = "red"| "green"| "blue"


const myColor:Colors = "blue"

const colorArray: Colors[] = [
    "blue","green","red"
]


type AllColors = Colors | Person // 2 tipi birleştirdik

const color_person:AllColors[] = ["blue"]


type Person2 ={
    isim:string,
    soyisim:string,
    yas:number
}


type Dog = {
    yas:number,
    cins:string,
    tur:string
}


type DogPerson = Person2 & Dog

const person_dog : DogPerson = {
    isim:"Dio",
    soyisim:"Brando",
    yas:2,
    cins:"Golden",
    tur:"Golden"
}

console.log(person_dog)


const myMap = new Map();


myMap.set("yusuf","aaga")


const myMap2 = new Map<string,string>();


myMap2.set("yusuf","aaga")

const myMapPerson = new Map<string,Person2>();


myMapPerson.set("yusuf",{
    isim:"yusuf",
    soyisim:"celik",
    yas:25
})

console.log(myMapPerson)