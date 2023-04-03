import completedModel from './completed-model.js';
export const findCompleted = () => completedModel.find();
export const createCompleted = (completed) => completedModel.create(completed);
export const deleteCompleted = (cid) => completedModel.deleteOne({_id: cid});
