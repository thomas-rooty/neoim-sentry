import type {NextApiRequest, NextApiResponse} from 'next'
import clientPromise from "../../../lib/mongodb";

type Data = {
  neos: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Catch all route to get every filters
  const {
    query: {param},
  } = req

  if (param) {
    // Query the mongo database
    try {
      // Connect to the MongoDB database
      const client = await clientPromise;
      const db = await client.db("neoim-sentry");

      // Query the database
      // param[0] = h-max
      // param[1] = ps-min
      const neos = await db
        .collection("neos")
        .find({
          h: {$lte: parseFloat(param[0])},
          ps_max: {$gte: parseFloat(param[1])}
        })
        .toArray();

      console.log(neos)

      // Return the data, handle errors
      res.status(200).json({neos})
    } catch (error) {
      console.log(error)
    }
  }
}
