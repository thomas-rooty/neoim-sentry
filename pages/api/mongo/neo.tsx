import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoError} from 'mongodb';

type Data = {
  neos: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Connect to MongoDB using mongodb+srv://thomas-rooty:Zekkry2022@neoim-sentry.uu8fj2z.mongodb.net/test
  const MongoClient = require('mongodb').MongoClient;
  console.log('Connected to MongoDB1');
  const uri = "mongodb+srv://neo-mongo:YpwaP9rgorHSM48Z@neoim-sentry.uu8fj2z.mongodb.net/test";
  const client = new MongoClient(uri);
  const db = client.db('neoim-sentry');
  const collection = db.collection('neos');
  const data = await collection.find({}).toArray();
  // Return data
  res.status(200).json({neos: data})
}
