import type {NextApiRequest, NextApiResponse} from 'next'
import * as tf from '@tensorflow/tfjs';

type Data = {
  stars: any[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Catch all route
  const {query: {param},} = req

  // Define stars classes
  const classes = ['Brown Dwarf', 'Red Dwarf', 'White Dwarf', 'Main Sequence', 'Super Giants', 'Hyper Giants']

  // Load model
  const model = await tf.loadLayersModel('https://raw.githubusercontent.com/thomas-rooty/neoim-sentry/main/pages/api/ia/model.json')

  // Convert every param to numeric
  // @ts-ignore
  const params = param.map((p) => parseFloat(p))

  // Param has 7 values (temp, luminosity, radius, magnitude, star color, spectral class)
  const prediction = model.predict(tf.tensor2d([params as any], [1, 6]))

  // Get the index of the highest value
  const index = (prediction as any).argMax(1).dataSync()[0]

  // Get the class name
  const star = classes[index]

  // Return the star class
  res.status(200).json({stars: [star]})
}