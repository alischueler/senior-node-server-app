import drinksModel from './drinks-model.js';
export const findDrinks = () => drinksModel.find();
export const createDrinks = (completed) => drinksModel.create(completed);
export const deleteDrinks = (cid) => drinksModel.deleteOne({_id: cid});
