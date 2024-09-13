import { SchemaTypeDefinition } from 'sanity'

import modelSchema from './models'

export const schemaTypes = [modelSchema]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [modelSchema],
}
