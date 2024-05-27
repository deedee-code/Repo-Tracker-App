const Event = require("../app.model")

const activityById = async (req, res) => {
    const id = req.params.id

    try {
        const activity = await Event.findById(id)
        if (!activity) {
            return res.status(404).json({ message: "Activity not found" })
        }

        res.status(200).json({ message: "Successfully fetched Id Activity", activity: activity })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { activityById }