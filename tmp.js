const { default: mongoose } = require("mongoose");

const username="admin-nabeel"
const password="N@beel3112"
const cluster="cluster0.3jl39cv"

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true});