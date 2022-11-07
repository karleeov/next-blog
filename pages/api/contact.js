import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message, name } = res.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() === '' ||
      !message ||
      !message.trim() === ''
    ) {
      res.status(422).jason({
        message: 'invald input',
      });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      const client = await MongoClient(
        'mongodb+srv://karleeov:karlkarl@cluster0.5sdme.mongodb.net/karldb?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not get the db' });
      return;
    }

    const db = client.db();
    try {
      db.collection('message').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ messaage: 'stroing failed' });
      return;
    }

    client.close();
    res.status(201).json({ message: newMessage, message: 'sent' });
  }
}
export default handler;
