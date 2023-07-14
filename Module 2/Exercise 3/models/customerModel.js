let customers = [
  {
    customerId: "12345",
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 5000,
  },
  {
    customerId: "67890",
    name: "Jane Doe",
    email: "janedoe@example.com",
    balance: 0,
  },
];

module.exports = {
  getAllCustomers: () => {
    return customers;
  },
  getCustomer: (customerId) => {
    return customers.find((c) => c.customerId === customerId);
  },
  createCustomer: (name, email, initialBalance) => {
    let newCustomer = {
      customerId: generateCustomerId(),
      name: name,
      email: email,
      balance: initialBalance,
    };
    return newCustomer;
  },
  generateCustomerId: () => {
    return Math.random().toString(10).substring(2, 6);
  },
};
