import { MongoClient,ObjectId } from "mongodb";
const uri =
  "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/ToDoTasks?retryWrites=true&w=majority&appName=cluster0";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(uri);
    const db = client.db();
    try {
      const query = { _id: ObjectId(data.id) };
      console.log("query",query,"data",data)
      const Collection = db.collection("tasks");
      const result = await Collection.deleteOne(query);
      res.status(201).json({ message: "Task deleted!",result });
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
  }
}

export default handler;
