


function greet(name : string):string{
    return `Hola ${name}`;

}

// const greet2 = (name : string):string =>{ // no cambio a lo que apuntqa el objeto
//      return `Hola ${name}`;
// }

const greet2 = (name : string):string =>`Hola ${name}` //ahora de manera abreviada




const message = greet("Goku ");

const message2 = greet2('Vegeta');

console.log(message, message2);

////////////////////////////////////////////////////////////////////////////////////


interface User{
    uid: string;
    username: string;
    age: number;
}


// Funcion Normal
function getUser(): User {
    return{
        uid:'ABC-123',
        username:'El_Papi24',
        age: 10
    };
}

// tarea necesito generar una funcion de flecha con respecto al getUser
// ✅ TAREA RESUELTA - función flecha equivalente
// const getUser2 = (): { uid: string; username: string } => {
//     return {
//         uid: 'ABC-1234',
//         username: 'La_Madre24',
//     };
// }

const getUser2 = (): { uid: string; username: string } =>  ({uid: 'ABC-1234', username: 'La_Madre24'});// es un return implicito, es decir no se necesita escribir la palabra return, ni las llaves, ni el return, solo se pone el objeto entre parentesis


        
        
  
    



const user = getUser()
const user2 = getUser2()

console.log(user,user2) // cuando una funcion tiene adentro un objeto que en este caso en el "user" se le llama metodo



const MyNumbers: number[] = [1,2,3,4,5,6,7,8,9];

// Forma normal (la que tienes)
MyNumbers.forEach(function(Value) {
    console.log({Value});
});

// ✅ Con función flecha
MyNumbers.forEach((Value) => {
    console.log({Value});
});

// Version abreviada
MyNumbers.forEach(console.log) // otra forma de hacerlo, es decir no se necesita escribir la palabra console.log, ni las llaves, ni el return, solo se pone el objeto entre parentesis;