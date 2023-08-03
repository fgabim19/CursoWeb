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

invoice.client.firstname = "Josep";
// invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);

console.log("Total: " + invoice.total());
