const express = require("express");
const { githubWebhook } = require("./controller/activity");
const { allActivities } = require("./controller/get-all-activities");
const { activityById } = require("./controller/get-id-activity");
const { activityByUsername } = require("./controller/get-username-activity");

const router = express.Router();

router.post("/activities", githubWebhook);
router.get("/activities", allActivities);
router.get("/activities/:id", activityById);
router.get("activities/:username", activityByUsername)


module.exports = router;