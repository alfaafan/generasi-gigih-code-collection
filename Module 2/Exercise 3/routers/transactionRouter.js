const express = require("express");
const { postTransaction, getTransaction } = require("../controllers/transactionController");
const router = express.Router();

router.get("/", getTransaction);
router.post("/", postTransaction);

module.exports = router;
