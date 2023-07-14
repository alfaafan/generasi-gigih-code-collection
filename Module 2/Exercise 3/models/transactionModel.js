let transactions = [
  {
    transactionId: "123456789",
    sourceId: "12345",
    destinationId: "67890",
    amount: 500,
    timestamp: "2023-06-01T00:00:00.000Z",
  },
];

class Transaction {
  generateTransactionId() {
    return Math.random().toString(36).substring(2, 9);
  }

  getAllTransactions() {
    return transactions;
  }

  createTransaction(sourceId, destinationId, amount) {
    const transaction = {
      transactionId: this.generateTransactionId(),
      sourceId,
      destinationId,
      amount,
      timestamp: new Date().toISOString(),
    };
    transactions.push(transaction);
    return transaction;
  }
}

module.exports = Transaction;
