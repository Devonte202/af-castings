import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export interface Model {
  _type: 'model'
  _id: string
  fullName: string
  age: number
  race: string
  gender: string
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

export interface About {
  _type: 'about'
  agencyDescription: string
  profileImage: {
    image: string,
  }
  ceoDescription: string
}

export async function getModels(client: SanityClient): Promise<Model[]> {
  return await client.fetch(groq`*[_type == "model"]{
  _id,
  fullName,
  age,
  race,
  gender,
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

export async function getAbout(client: SanityClient): Promise<About> {
  return await client.fetch(groq`*[_type == "about"][0]{
  agencyDescription,
  profileImage {"image": asset->url},
  ceoDescription
}`)
}
