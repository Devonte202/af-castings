'use client'
import Link from 'next/link'
import { useEffect,useState } from 'react'

import ModelCard  from '~/components/ModelCard'
import { getClient } from '~/lib/sanity.client'
import { getModels, Model } from '~/lib/sanity.queries'

import styles from './styles.module.css'

function BentoBox() {
  const [models, setModels] = useState<Model[]>([])

  const fetchModels = async () => {
    const client = getClient()
    const models = await getModels(client)
    const randomModels = models.sort(() => 0.5 - Math.random()).slice(0, 6)
    setModels(randomModels)
  }
  
  useEffect(() => {
    fetchModels()
  }, [])


  return (
    <div className={styles.bento_box_container}>
        <div className={styles.section_title}>
          <h1>Talent</h1>
          <p>Discover our talented models</p>
          <Link href="/models">
            <button className={styles.page_cta}>View All Models</button>
          </Link>
        </div>
      <div className={styles.bento_boxes}>
        <div className={styles.bento_box_column1}>
          <ModelCard model={models[0]} />
          <ModelCard model={models[1]} />
        </div>
        <div className={styles.bento_box_column2}>
          <ModelCard model={models[2]} />
          <ModelCard model={models[3]} />
        </div>
        <div className={styles.bento_box_column3}>
          <ModelCard model={models[4]} />
          <ModelCard model={models[5]} />
        </div>
      </div>
    </div>
  )
}

export default BentoBox
