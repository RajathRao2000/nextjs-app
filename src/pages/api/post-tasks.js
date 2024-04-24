import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/ToDoTasks?retryWrites=true&w=majority&appName=cluster0";
// /api/new-meetup

async function handler(req, res) {
  // console.log("request",req)
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(uri);
      const db = client.db();

      const tasksCollection = db.collection("tasks");
      const result = await tasksCollection.insertOne(data);
      console.log("result", result);
      client.close();

      res
        .status(201)
        .json({ message: "Task Inserted!", id: result.insertedId.toString() });
    } catch (err) {
      console.log("error", err);
    }
  }
}

export default handler;
