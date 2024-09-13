import races from '~/constants/races'

import cities from '../constants/cities'

// Desc: Schema for model document
const modelSchema = {
  name: 'model',
  title: 'Model',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      options: {
        list: [
          ...cities
        ],
      }
    },
    {
      title: 'Race',
      name: 'race',
      type: 'string',
      options: {
        list: [
          ...races
        ],
      }
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
      ],
    },
    {
      name: 'height',
      type: 'string',
      title: 'Height',
    },
    {
      name: 'bust',
      type: 'string',
      title: 'Bust',
    },
    {
      name: 'waist',
      type: 'string',
      title: 'Waist',
    },
    {
      name: 'hips',
      type: 'string',
      title: 'Hips',
    },
    {
      name: 'shoeSize',
      type: 'string',
      title: 'Shoe size',
    },
    {
      name: 'hairColor',
      type: 'string',
      title: 'Hair color',
    },
    {
      name: 'eyeColor',
      type: 'string',
      title: 'Eye color',
    },
  ]
}

export default modelSchema
