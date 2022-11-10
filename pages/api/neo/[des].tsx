import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  neo: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: {des},
  } = req

  // Call Sentry API to get NEO data
  fetch(`https://ssd-api.jpl.nasa.gov/sentry.api?des=${des}`)
    .then(response => response.json())
    .then(data => {
      res.status(200).json({neo: data})
    })
    .catch(error => {
      res.status(500).json({neo: error})
    })
}