// import express from "express"
// import cors from "cors"



// const app = express()
// app.use(cors())
// app.use(express.json())

const {MongoClient} = ('mongodb').MongoClient
uri = ""
const client = new MongoClient(uri)
client.connect();

function main(){

}

function create(client){
  const result = client.db()
}