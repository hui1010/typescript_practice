console.log("hohoho");

const a:string = "1";


interface IState {
    readonly name:string,
    age:number,
    gender:string
}

const obj:IState = {
    name: "tom",
    age: 11,
    gender: "female"
}

function getAssert(name:string|number) {
    return (name as string).length
}

console.log(getAssert(111))