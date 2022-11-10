import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  neos: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Call Sentry API to get NEO data
  fetch(`https://ssd-api.jpl.nasa.gov/sentry.api`)
    .then(response => response.json())
    .then(data => {
      res.status(200).json({ neos: data['data'] })
    })
    .catch(error => {
      res.status(500).json({ neos: [] })
    })
}