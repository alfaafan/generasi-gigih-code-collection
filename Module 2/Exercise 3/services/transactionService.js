const { getCustomer } = require("../models/customerModel");
const { createTransaction } = require("../models/transactionModel");

module.exports = {
  transfer: (sourceId, destinationId, amount) => {
    const sourceAccount = getCustomer(sourceId);
    const destinationAccount = getCustomer(destinationId);
    if (!sourceAccount || !destinationAccount) {
      throw new Error("Invalid source or destination account");
    }
    if (sourceAccount.balance < amount) {
      throw new Error("Insufficent balance in the source account");
    }
    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    const transaction = createTransaction(sourceAccount.customerId, destinationAccount.customerId, amount);
    return transaction;
  },
};
