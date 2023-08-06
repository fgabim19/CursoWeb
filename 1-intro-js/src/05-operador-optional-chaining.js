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
// cuando un objeto no esta definido en el json
// para evitar un error se coloca ?, y este devulve su valor
// con esto evaluamos si existe o si tiene un valor nulo ese objeto
console.log(invoice.company?.name);

if (invoice.company != undefined && invoice.company.name) {
  console.log("perfecto");
} else {
  console.log("no viene la empresa");
}

// lo anterior es lo mismo que
if (invoice.company?.name) {
  console.log("perfecto");
} else {
  console.log("no viene la empresa");
}

console.log(invoice.client?.address?.street);
