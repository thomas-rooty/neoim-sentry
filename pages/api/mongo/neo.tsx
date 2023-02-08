import type {NextApiRequest, NextApiResponse} from 'next'
import clientPromise from "../../../lib/mongodb";

type Data = {
  neos: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const client = await clientPromise;
    const db = await client.db("neoim-sentry");

    const neos = await db
      .collection("neos")
      .find({})
      .sort({des: 1})
      .limit(10)
      .toArray();

    res.status(200).json({neos})
  } catch (error) {
    console.log(error)
  }
}
