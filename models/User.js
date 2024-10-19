import mongoose from "mongoose";


const schema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "USER",
    },
})


const model = mongoose.models.User || mongoose.model("User", schema);

module.exports = model