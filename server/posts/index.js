import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
const PORT = 3002;

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

let userDB;
let postDB;

const connectDB = async () => {
    try {
        const client = await MongoClient.connect(process.env.REACT_APP_USER_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });
    
        userDB = await client.db("Users").collection('users');
        postDB = await client.db("Posts").collection('posts');
    } catch (err) {
        console.log(err);
    }
}

await connectDB();

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

app.post("/post/create", async (req, res) => {
    const { userid, item, price, location, category, condition, description, thumbnail } = req.body;
    console.log(req.body)
    if (userid || item || price || location || category || condition || description || thumbnail) {
        const data = {
            id: uuid(),
            item: item,
            price: price,
            location: location,
            category: category,
            condition: condition,
            description: description,
            thumbnail: thumbnail
        }
        postDB.insertOne(data)
        res.status(201).send(data);
    } else {
        res.status(404).send({msg: 'Request data is incomplete'});
    }
});

app.get("/posts/get", async (req, res) => {
    const { limit } = req.query;
    if (limit) {
        try {
            const posts = await postDB.aggregate([{ $sample: { size: limit } }]).toArray();
            res.status(200).send(posts);
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            const posts = await postDB.find().toArray();
            res.status(200).send(shuffle(posts));
        } catch (err) {
            console.log(err);
        }
    }
});

app.get("/post/get", async (req, res) => {
    const { postid } = req.body;
    try {
        const post = await postDB.findOne({ id: postid });
        res.status(200).send(post);
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})