import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  neos: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Catch all route
  const {
    query: {param},
  } = req

  // Call Sentry API to get NEO data
  // @ts-ignore
  fetch(`https://ssd-api.jpl.nasa.gov/sentry.api?h-max=${param[0]}&ps-min=${param[1]}&ip-min=${param[2]}`)
    .then(response => response.json())
    .then(data => {
      res.status(200).json({ neos: data['data'] })
    })
    .catch(error => {
      res.status(500).json({ neos: [] })
    })
}