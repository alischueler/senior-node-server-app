import * as drinksDao from "./drinks-dao.js"

const DrinksController = (app) => {
    app.get('/api/drinks', findDrinks)
    app.post('/api/drinks', createDrinks)
    app.delete('/api/drinks/:did', deleteDrinks)
}

const findDrinks = async (req, res) => {
    const completedC = await drinksDao.findDrinks()
    res.json(completedC);
}

const createDrinks = async (req, res) => {
    const newEntry = req.body;
    const insertedCompleted = await drinksDao
        .createDrinks(newEntry);
    res.json(insertedCompleted);
}

const deleteDrinks = async (req, res) => {
    const completedID = req.params['did'];
    const status = await drinksDao
        .deleteDrinks(completedID);
    res.send(status);
}


export default DrinksController;