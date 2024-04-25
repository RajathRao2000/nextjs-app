import { MongoClient, ObjectId } from "mongodb";
const uri =
  "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/ToDoTasks?retryWrites=true&w=majority&appName=cluster0";
async function handler(req, res) {
  console.log("request",req.body)
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(uri);
      const db = client.db();
      const query = { _id: ObjectId(data._id) };

      const tasksCollection = db.collection("tasks");
      const result = await tasksCollection.updateOne(query, {
        $set: {
          name: data.name,
          date: new Date().toString(),
          status: "incomplete",
        },
      });
      console.log("result", result);
      client.close();

      res
        .status(201)
        .json({ message: `edited ${data.name}`, result });
    } catch (err) {
      console.log("error", err);
    }
  }
}

export default handler;
