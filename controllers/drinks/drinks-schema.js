import mongoose from 'mongoose';
const schema = mongoose.Schema({
    type: String,
    where: String,
    date: String,
    person: String,
    image: String,
    video: String
}, {collection: 'drinks'});
export default schema;