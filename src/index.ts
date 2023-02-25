let x: number = 20;
console.log(x);

// inferência e anotation

let firstname: string = "Roberto"
let age: number = 24
let array: number [] = [9]

console.log(array.length)

//tuplas
let tuple: [number, string, number] = [8, "a", 6]

console.log(tuple)

const user: {name:string, age: number} = {
    name:"Roberto",
    age: 24,

}

console.log(user)


// union type

let id: string|number = 8

// type alias

type Typeid = number| string

let valor: Typeid = 8000

enum Size {
    P = "pequeno",
    M = "Medio",
    G = "Grande",
}

const camisa = {
    name: "Roberto",
    size: Size.G
}

console.log(camisa)

//literal type

let teste: "altentificado"|null


//funções

function soma(a:number,b:number){
    return a+b
}

console.log(soma(12,12))


function greeting(name: string, greet?: string): void{
    if(greet){
        console.log(`O nome é  ${greet}${name}`)
    }

    else{
        console.log(`O nome é ${name}`)    
    }
}

greeting("Roberto")
greeting("Roberto", "sr.")