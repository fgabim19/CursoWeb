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
  total: 1000,
  greeting: function () {
    // no puede ir una funcion de flecha
    return `Hola ${this.client.firstname}`;
  },
};


invoice.client.firstname = "Josep";
invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);


