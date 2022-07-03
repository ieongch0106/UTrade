// import express from "express"
// import cors from "cors"

// mongo username- utrade
// mongo password phMaKOfw0ZvHo1ag

// const app = express()
// app.use(cors())
// app.use(express.json())

const {MongoClient} = ('mongodb').MongoClient
const uri = 'mongodb+srv://utrade:phMaKOfw0ZvHo1ag@cluster0.v7b4d.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)
client.connect();

function main(){

}

function create(client){
  const result = client.db()
}