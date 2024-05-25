const express = require("express");
const { githubWebhook } = require("./app.controller");

const router = express.Router();

router.post("/github-webhook", githubWebhook);

module.exports = router;