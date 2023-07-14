const Transaction = require("../models/transactionModel");
const { transfer } = require("../services/transactionService");

module.exports = {
  postTransaction: (req, res) => {
    try {
      const { sourceAccount, destinationAccount, amount } = req.body;
      if (!sourceAccount || !destinationAccount || !amount) {
        throw new Error("Insufficent parameter");
      }
      const trx = transfer(sourceAccount, destinationAccount, amount);
      res.status(201).json({ message: "Transaction created Successfully", data: trx });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  getTransaction: (req, res) => {
    try {
      const transactions = new Transaction();
      res.status(200).send(transactions.getAllTransactions());
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
