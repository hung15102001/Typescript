// let a: number = 2;
// let b: number = 2.2;
// let error:string = 'Heeeee';
// let permit:boolean = true;

// const result = a+b;
// if(permit) {
//     console.log(error +' '+ result);
// }else {
//     console.log('Lỗi')
// }

type Tperson = {
    id?: number;  //id not required
    name: string;
    age: number;
}

const person: Tperson = {
    // id:1,
    name: 'demo',
    age: 21
}

const persons: Tperson[] =[
    {id:1, name: 'demo', age: 21},
    {id:2, name: 'demo1', age: 22},
]
console.log(persons);
