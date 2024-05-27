const Event = require("../app.model")

const activityByUsername = async (req, res) => {
    const username = req.params.username;

    try {
        const activity = await Event.find({ username });
        if (!activity) {
            return res.status(404).json({ message: "No activity found" })
        }

        res.status(200).json({ message: "Successfully fetched username Activity", activity: activity });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { activityByUsername }