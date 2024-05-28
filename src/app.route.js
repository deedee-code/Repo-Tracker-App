const express = require("express");
const { trackActivities } = require("./controller/activity");
const { allActivities } = require("./controller/get-all-activities");
const { activityById } = require("./controller/get-id-activity");
const { activityByUsername } = require("./controller/get-username-activity");

const router = express.Router();

router.post("/activities", trackActivities);
router.get("/activities", allActivities);
router.get("/activities/:id", activityById);
router.get("/activities/username/:username", activityByUsername)


module.exports = router;