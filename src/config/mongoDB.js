import { connect } from "mongoose";
// console.log(process.env.MONGO_URI)
async function main() {
    await connect(process.env.MONGO_URI)
}
main()
    .then(() => console.log("MongoDB connected on local environment"))
    .catch((err) => console.log(`Database connection failed: ${err.message}`))