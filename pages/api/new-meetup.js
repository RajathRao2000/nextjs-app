import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/meetups?retryWrites=true&w=majority&appName=cluster0";
// /api/new-meetup

async function handler(req, res) {
    // console.log("request",req)
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(uri);
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
    //   console.log(result);
      client.close();

      res.status(201).json({ message: "Meetup Inserted!" });
    } catch (err) {
      console.log("error||",err);
    }
  }
}

export default handler;
