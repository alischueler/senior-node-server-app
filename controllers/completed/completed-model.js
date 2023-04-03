import mongoose from 'mongoose';
import completedSchema from "./completed-schema.js";
const completedModel = mongoose
    .model('CompletedModel', completedSchema);
export default completedModel;