import posts from "./completed.js";
import * as completedDao from "./completed-dao.js"
let completed = posts;

const CompletedController = (app) => {
    app.get('/api/completed', findCompleted)
    app.post('/api/completed', createCompleted)
    app.delete('/api/completed/:cid', deleteCompleted)
}

const findCompleted = async (req, res) => {
    const completedC = await completedDao.findCompleted()
    res.json(completedC);
}

const createCompleted = async (req, res) => {
    const newEntry = req.body;
    const insertedCompleted = await completedDao
        .createCompleted(newEntry);
    res.json(insertedCompleted);
}

const deleteCompleted = async (req, res) => {
    const completedID = req.params['cid'];
    const status = await completedDao
        .deleteCompleted(completedID);
    res.send(status);
}


export default CompletedController;