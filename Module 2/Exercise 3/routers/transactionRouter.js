const express = require("express");
const { postTransaction, getTransaction } = require("../controllers/transactionController");
const router = express.Router();

router.get("/transactions", getTransaction);
router.post("/transactions", postTransaction);

module.exports = router;
