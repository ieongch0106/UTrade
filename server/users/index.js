import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import { connectDB } from './db.js';

const app = express();
const PORT = process.env.PORT || 3001;

connectDB(process.env.REACT_APP_USER_KEY);


app.use(logger('dev'));
app.use(express.json());

app.post("/login", async (req, res) => {
    
});

app.post("/register", async (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})