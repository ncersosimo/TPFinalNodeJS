import { mongoose } from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
    },
    { timestamps: true }
)

UserSchema.set("toJSON", {
    transform(_doc, ret) {
        delete ret.password
        delete ret.__v
        ret.ID = ret._id
        delete ret._id
    }
})
const User = mongoose.model("User", UserSchema)
export default User