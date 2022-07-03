import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("../client/build"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true
    }).then(() => {
       console.log('db connected') 
    }).catch((err) => {
        console.log(err)
});

app.get("/user/login", async (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})