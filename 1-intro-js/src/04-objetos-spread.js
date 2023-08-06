// object

const invoice = {
  id: 10,
  date: new Date(),
  client: {
    id: 2,
    firstname: "Helga",
    lastname: "Dune",
    age: 20,
  },
  items: [
    {
      producto: "Keyboard",
      price: 399,
      quantity: 2,
    },
    {
      producto: "Mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "Paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    // no puede ir una funcion de flecha
    return `Hola ${this.client.firstname}`;
  },
};
// mantiene el valor y al modificar la segunda modifica la primera tambien
// const invoice2 = invoice;

// clona el objeto el cual equivale a una nueva instancia
const invoice2 = { ...invoice };

const result = invoice === invoice2;

console.log(result);

// una sola linea
// if (result) console.log(result);
// else console.log("no son iguales");

if (result) {
  console.log(result);
} else {
  console.log("no son iguales");
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);

