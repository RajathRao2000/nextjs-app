import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/meetups?retryWrites=true&w=majority&appName=cluster0";
// /api/new-meetup

async function handler(req, res) {
    console.log("request",req)
  if (req.method === "GET") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(uri);
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.find({});
      // await result.forEach(console.dir)
      const arr=[]
      await result.forEach(val=>{
        arr.push(val)
      })
      console.log(arr)
      // console.log( result.forEach(val=> val),"}}}}");
      client.close();

      res.status(201).json(arr);
    } catch (err) {
      console.log(err);
    }
  }
}

export default handler;
