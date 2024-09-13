import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export interface Model {
  _type: 'model'
  _id: string
  fullName: string
  age: number
  race: string
  images: string[]
  height: string
  bust: string
  waist: string
  hips: string
  shoeSize: string
  hairColor: string
  eyeColor: string
  location: string
}

export async function getModels(client: SanityClient): Promise<Model[]> {
  return await client.fetch(groq`*[_type == "model"]{
  fullName,
  age,
  race,
  "images": images[].asset->url,
  height,
  bust,
  waist,
  hips,
  shoeSize,
  hairColor,
  eyeColor,
  location
}`)
}
