import { SchemaTypeDefinition } from 'sanity'

import aboutSchema from './about'
import modelSchema from './models'

export const schemaTypes = [modelSchema, aboutSchema]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [modelSchema, aboutSchema],
}
