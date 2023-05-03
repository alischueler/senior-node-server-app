import mongoose from 'mongoose';
import drinksSchema from "./drinks-schema.js";
const drinksModel = mongoose
    .model('DrinksModel', drinksSchema);
export default drinksModel;