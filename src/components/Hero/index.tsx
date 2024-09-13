import Image from 'next/image'
import { use, useEffect, useState } from 'react'

import { getClient } from '~/lib/sanity.client'
import { getModels, type Model } from '~/lib/sanity.queries'

import styles from './styles.module.css'

function Hero () {

  const [models, setModels] = useState<Model[]>([])
  const [heroImages, setHeroImages] = useState<string[]>([])

  const fetchModels = async () => {
    const client = getClient()
    const models = await getModels(client)
    setModels(models)
  }

  const getRandomModelImage = (model: Model) => {
    const randomIndex = Math.floor(Math.random() * model.images.length)
    return model.images[randomIndex]
  }
  
  const getRandomModel = (models: Model[]) => {
    const randomIndex = Math.floor(Math.random() * models.length)
    return models[randomIndex]
  }

  useEffect(() => {
    fetchModels()
  }, [])

  useEffect(() => {
    if (models.length === 0) return

    const generateHeroImages = (models: Model[]) => {
      const images = []
      for (let i = 0; i < 5; i++) {
        const model = getRandomModel(models)
        images.push(getRandomModelImage(model))
      }
      return images
    }
    setHeroImages(generateHeroImages(models))
  }, [models])

  return (
    <div className={styles.hero}>
      <div className={styles.hero_images}>
        <div className={styles.hero_screen}></div>
        {heroImages.map((image, index) => (
          <div key={index} className={styles.hero_image__wrapper}>
            <Image src={image} alt="model" width={75} height={100} className={styles.hero_image}/>
          </div>
        ))}
      </div>
       <div className={styles.hero_text}>
          <span>AF</span>
          <span>CASTINGS</span>
        </div>
        <br/>
        <svg className={styles.mouse_icon} width={60} height={60} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    </div>
  )
}

export default Hero
