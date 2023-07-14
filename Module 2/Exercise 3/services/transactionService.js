const Customer = require("../models/customerModel");
const Transaction = require("../models/transactionModel");

module.exports = {
  transfer: (sourceId, destinationId, amount) => {
    const customer = new Customer();
    const sourceAccount = customer.getCustomer(sourceId);
    const destinationAccount = customer.getCustomer(destinationId);
    if (!sourceAccount || !destinationAccount) {
      throw new Error("Invalid source or destination account");
    }
    if (sourceAccount.balance < amount) {
      throw new Error("Insufficent balance in the source account");
    }

    if (typeof amount !== "number") {
      throw new Error("Amount must be a number");
    }

    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;

    const transaction = new Transaction();
    return transaction.createTransaction(sourceAccount.customerId, destinationAccount.customerId, amount);
  },
};
