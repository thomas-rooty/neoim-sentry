import type {NextApiRequest, NextApiResponse} from 'next'
import * as tf from '@tensorflow/tfjs';
import Model from '../../../public/model.json';

type Data = {
  stars: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Catch all route
  const {
    query: {param},
  } = req

  // Define stars classes
  const classes = ['Brown Dwarf', 'Red Dwarf', 'White Dwarf', 'Main Sequence', 'Super Giants', 'Hyper Giants']

  // Load model
  const model = await tf.loadLayersModel('https://www.jsonkeeper.com/b/T8Q5')

  // Create a new array of features from the request
  // @ts-ignore
  const features = [param[0], param[1], param[2], param[3], param[4], param[5], param[6]]

  // Make a prediction using the model
  const prediction = model.predict(tf.tensor2d([features]))

  // Get the index of the highest probability
  //const index = prediction.argMax(1).dataSync()[0]
  const index = (prediction as any).argMax(1).dataSync()[0]

  // Get the class name
  const starClass = classes[index]

  // Return the class name
  res.status(200).json({stars: [starClass]})
}