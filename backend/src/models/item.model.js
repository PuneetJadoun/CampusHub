import mongoose  from "mongoose";

const itemSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum : ["rent" , "sell"],
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
       images: {
            type: [String],
            validate: {
                validator: function (arr) {
                return arr.length <= 5;
                },
                message: "Not more than 5 images per item"
            }
        },
        description: {
            type: String,
            required: true,
        },
        status:{
            type: String,
            enum : ["available" , "rented", "sold"],
            default: "available"
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User",
            required: true
        },
    },   
    {timestamps: true}
);

const Item = mongoose.model("Item", itemSchema);

export default Item;