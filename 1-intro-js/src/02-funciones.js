// funciones
/*
function sayHello(name = 'persona', age = 0) {
  const greeting = `Hola mundo Funcion! ${name} ${age}`;
  // console.log("Hello world!");

  return greeting;
}
const result = sayHello('gabi');

console.log(result);
*/

// funcion flecha
/*
const sayHello = (name = 'persona', age = 0) => {
    const greeting = `Hola mundo Funcion! ${name} ${age}`;
    // console.log("Hello world!");
  
    return greeting;
  }
  const result = sayHello('gabi');
  
  console.log(result);
  */

const sayHello = (name = "persona", age = 0) => `Hola mundo ${name} ${age}`;
const add = (a = 0, b = 0) => a + b;

const result = sayHello("gabi", 10);

console.log(result);
console.log(add(10, 5));
