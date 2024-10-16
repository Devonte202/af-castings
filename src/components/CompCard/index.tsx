'use client'
import Image from "next/image"
import { useState } from "react"

import CompCardDetail from "../CompCardDetail"
import styles from "./styles.module.css"

type CompCardProps = {
  model: {
    fullName: string;
    age: number;
    race: string;
    height: string;
    bust: string;
    waist: string;
    hips: string;
    shoeSize: string;
    hairColor: string;
    eyeColor: string;
    images: string[];
    location: string;
    gender: string;
  }
}

const CompCard = ({model}: CompCardProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % model.images.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + model.images.length) % model.images.length)
  }

  const handleOpenModal = () => {
    setShowModal(true)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

  const handleCloseModal = (e: any) => {
    e.stopPropagation()
    setShowModal(false)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <div className={styles.comp_card}>
      {showModal && <CompCardDetail model={model} toggleModal={handleCloseModal} />}
      <div className={styles.comp_card__identity}>
        <div className={styles.comp_card__identity__name}>{model.fullName.split(' ')[0]}</div>
        <div className={styles.comp_card__identity__age}>Age: {model.age}</div>
        <div className={styles.comp_card__identity__location}>{model.location}</div>
      </div>
      <div className={styles.comp_card__carousel_controls}>
        <button onClick={nextImage} className={styles.comp_card__carousel_controls__prev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
        </button>
        <button onClick={prevImage} className={styles.comp_card__carousel_controls__next}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </button>
      </div>
      <div className={styles.comp_card__carousel}>
        <div className={styles.comp_card__carousel__image} onClick={handleOpenModal}>
          <Image src={model.images[currentImage]} alt="" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default CompCard
