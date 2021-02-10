import express from 'express';
import bodyParser from 'body-parser';
import { getUsers, deleteUsers, getUser, createUser, updateUser, deleteUser } from './controllers/user.js';

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

// Test Parsers - Req.body
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('Test Req.body \n you posted:\n')
//     console.log("🚀 ~ file: app.js ~ line 22 ~ req.body", req.body)
//     res.end(JSON.stringify(req.body, null, 2))
// })

// expose static files
app.use('/static', express.static('public'))

// users routes
app.get("/users", getUsers)
app.delete("/users", deleteUsers)
app.get("/user", getUser)
app.post("/user", createUser)
app.put("/user", updateUser)
app.delete("/user", deleteUser)

app.listen(port, hostname, () => {
    console.log(`Server runnning -> http://${hostname}:${port}`)
});