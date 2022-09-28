import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
const PORT = 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const client = await MongoClient.connect(process.env.REACT_APP_USER_KEY, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });

    return await client.db("Users").collection('users');
}

const db = await connectDB();

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await db.findOne({username: username});
        if (user) {
            res.status(200).send(user.fullname);
        } else {
            res.status(404).send({msg: 'User not found'});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/register", async (req, res) => {
    try {
        const { username, fullname, email, password, tel } = req.body;
        if (username && fullname && email && password && tel) {
            // check if user existed
            const user = await db.insertOne({id: uuid(), username: username, fullname: fullname, email: email, password: password, tel: tel});
            res.status(201).json(user);
        } else {

        }
      } catch (err) {
        res.status(500).send(err);
      }
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})