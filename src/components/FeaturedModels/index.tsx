'use client'
import { useEffect,useState } from 'react'

import ModelCard  from '~/components/ModelCard'
import { getClient } from '~/lib/sanity.client'
import { getModels, Model } from '~/lib/sanity.queries'

import styles from './styles.module.css'

function FeaturedModels() {
  const [models, setModels] = useState<Model[]>([])

  const fetchModels = async () => {
    const client = getClient()
    const models = await getModels(client)
    setModels([...models, ...models, ...models])
  }
  
  useEffect(() => {
    fetchModels()
  }, [])

  return (
    <div className={styles.feature_models}>
      <h2 className={styles.section_title}>Featured Models</h2>
      <div className={styles.model_carousel}>
        {
          models.map((model, index) => (
            <ModelCard key={index} model={model} />
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedModels
