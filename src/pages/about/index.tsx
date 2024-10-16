import Image from 'next/image'
import React, {useEffect, useState} from 'react'

import Layout from "~/components/Layout"
import { getClient } from '~/lib/sanity.client'
import { About, getAbout } from '~/lib/sanity.queries'

import styles from './styles.module.css'

const AboutPage: React.FC = () => {

  const [aboutInfo, setAboutInfo] = useState<About | null>(null)

  const fetchAboutInfo = async () => {
    const client = getClient()
    const response = await getAbout(client)
    setAboutInfo(response)
  }

  useEffect(() => {
    fetchAboutInfo()
  }, [])

  return (
    <Layout>
      <div className={styles.about_container}>
        <h1>About AF Castings</h1>
        <p className={styles.about_text}>
          {aboutInfo?.agencyDescription}
        </p>
          <h2>Meet Our CEO</h2>
          <Image
            src={aboutInfo.profileImage.image}
            alt="CEO"
            width={200}
            height={200}
            className={styles.ceo_image}
          />
          <p className={styles.about_text}>
            {aboutInfo?.ceoDescription}
          </p>
      </div>
    </Layout>
  )
}

export default AboutPage
