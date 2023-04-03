import posts from "./completed.js";
let completed = posts;

const CompletedController = (app) => {
    app.get('/api/completed', findCompleted)
    app.post('/api/completed', createCompleted)
    app.delete('/api/completed/:cid', deleteCompleted)
}

const findCompleted = (req, res) => {
    res.json(completed)
}

const createCompleted = (req, res) => {
    const newEntry = req.body;
    newEntry._id = (new Date()).getTime()+'';
    completed = [newEntry, ...completed]
    res.json(newEntry);
}

const deleteCompleted = (req, res) => {
    const completedID = req.params['cid'];
    completed = completed.filter(com =>
        com._id !== completedID);
    res.sendStatus(200);
}


export default CompletedController;