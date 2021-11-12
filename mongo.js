const { MongoClient }=require( "mongodb");
const { Server }=require( "mongodb");

const MONGO_URL = process.env.MONGO_URL;
//"mongodb://localhost:27017";
const MONGO_NAME = process.env.MONGO_NAME;

var client = new MongoClient(MONGO_URL);

const mongo={
    db:null,
    entries:null,

    async connect (){
        await client.connect();
        console.log("connected to mongobd:", MONGO_URL);
        this.db = client.db(MONGO_NAME);
        console.log("Selected Database:", MONGO_NAME);
        this.entries= this.db.collection("entries");
    }
}

module.exports = mongo