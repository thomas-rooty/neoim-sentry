// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  author: string,
  github: string,
  version: string,
  description: string,
  license: string,
  dependencies: string[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    author: 'Thomas Caron',
    github: 'htts://github.com/thomas-rooty',
    version: '1.0.0',
    description: 'This is a Next.js app that uses the CNEOS Sentry System API to display information about Near Earth Objects (NEOs).',
    license: 'MIT',
    dependencies: [
      'next',
      'typescript',
      'eslint',
      'prettier',
    ]
  })
}
