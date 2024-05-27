const Event = require("../app.model")

const allActivities = async (req, res) => {
    try {
        const activities = await Event.find()
        res.status(200).json(activities)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { allActivities }