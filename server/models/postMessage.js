import mongoose from 'mongoose';

// creating a mongoose schema

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectFile: String,
    likeCount: {
        tupe: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//turning schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);
//export mongoose model 
export default PostMessage;