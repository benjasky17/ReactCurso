const person  = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    
}

const {name: IronmanName, age: IronmanAge, key} = person; //desestructuración de objetos, es decir extraer las propiedades del objeto y asignarlas a variables con el mismo nombre que las propiedades del objeto        


// const name = person.name;
// const age = person.age;
// const key = person.key; 

console.log({IronmanName, IronmanAge, key});   


interface Hero {
    name: string;
    age: number;
    key: string;
    rank? : string; // el signo de interrogación indica que esta propiedad es opcional
}


const useContext =({key, name, age, rank = "sin rango" }:Hero) => {
    return {
        keyName: key,
        user:{
            name,
            age,
        },
        rank: rank
    }

}

// const context = useContext(person);

// console.log(context);

const {
    rank,
    keyName,
    user,
    // user:{name}
    } = useContext(person);
const {name} = user;

console.log(rank,keyName,name);