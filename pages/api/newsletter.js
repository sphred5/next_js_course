import {connectDatabase, insertDocument} from "../../helpers/db-utils";


export default async function handler(req, res) {

  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid email address." })
      return;
    }
    let client;

    try {
      client = await connectDatabase();
    }
    catch (error) {
      res.status(500).json({ message: "connecting to the database failed" })
      return;
    }

    try {
      await insertDocument(client,"newsletter", { email: userEmail });
      client.close();
    }

    catch (error) {
      res.status(500).json({ message: "inserting to database failed" })
      return;
    }

    client.close();

    res.status(201).json({ message: 'Signed up!' })
  }
}
