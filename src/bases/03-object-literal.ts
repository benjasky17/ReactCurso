interface Person{
  firstName: String; 
  lastName: String; 
  age: number;


  address:Address
}

interface Address{
    postalCode:string;
    city: string;
}



const ironman: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: "wasd12e",
        city: "Santiago"
    }
}



console.log(ironman);





/* const ironman= Person ={
    firstname:'Tony',
    lastName:'Stark',
    age:45,
    address: {
        postalCode : 112331 ,
        city: 'New York',
    },

}

console.log(ironman);
 */
/* 
const spiderman = structuredClone(ironman)

spiderman.firstname = 'Peter'
spiderman.lastName = 'Parker'
spiderman.age = 22
spiderman.address.city = 'Santiago'


console.log(ironman, spiderman); */
