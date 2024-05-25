const Event = require("./app.model")

const githubWebhook = async (req, res) => {
    const event = req.headers['x-github-event'];
    const payload = req.body;

    console.log(`Received event: ${event}`);
    console.log('Payload:', payload);

    try {
        const newEvent = new Event({ event, payload });
        await newEvent.save();

        switch (event) {
            case 'member':
                if (payload.action === 'added') {
                    console.log(`Collaborator added: ${payload.member.login}`);
                } else if (payload.action === 'removed') {
                    console.log(`Collaborator removed: ${payload.member.login}`);
                } else if (payload.action === 'edited') {
                    console.log(`Collaborator changed: ${payload.member.login}`);
                }
                break;
            case 'deployment':
                console.log(`Deployment created by ${payload.deployment.creator.login}`);
                break;
            case 'fork':
                console.log(`Repository forked by ${payload.forkee.owner.login}`);
                break;
            case 'pull_request':
                console.log(`Pull request ${payload.action} by ${payload.pull_request.user.login}`);
                break;
            case 'push':
                console.log(`Push by ${payload.pusher.name}`);
                break;
            case 'repository':
                console.log(`Repository ${payload.action} by ${payload.sender.login}`);
                break;
            case 'star':
                console.log(`Repo ${payload.action} by ${payload.sender.login}`);
                break;
            case 'team_add':
                console.log(`Team member added: ${payload.team.name} - ${payload.team_member.login}`);
                break;
            default:
                console.log(`Unhandled event: ${event}`);
        }

        res.status(200).send('Event processed successfully');
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    githubWebhook
}