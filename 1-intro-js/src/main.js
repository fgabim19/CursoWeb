function sayHello(name = 'persona', age = 0) {
  const greeting = `Hola mundo Funcion! ${name} ${age}`;
  // console.log("Hello world!");

  return greeting;
}
const result = sayHello('gabi');

console.log(result);
