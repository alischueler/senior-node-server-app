import mongoose from 'mongoose';
const schema = mongoose.Schema({
    item: Array,
    description: String,
    date: String,
    person: String,
    image: String,
    video: String,
    file: String,
}, {collection: 'completed'});
export default schema;