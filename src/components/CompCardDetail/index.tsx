import Image from 'next/image'
import React, { useState } from 'react'

import styles from './styles.module.css'

const CompCardDetail = ({ model, toggleModal }) => {

  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % model.images.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + model.images.length) % model.images.length)
  }

  return (
    <div className={styles.comp_card_details}>
      <div className={styles.comp_card_overlay}></div>
      <div className={styles.comp_card_modal}>
        <button className={styles.modal_close} onClick={toggleModal}>
          <svg fill="#000000" height={30} width={30} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg>
        </button>

        <h1 className={styles.comp_card_modal__info__name}>{model.fullName}</h1>
        <div className={styles.comp_card_modal__info__age}>Age: {model.age}</div>
        <div className={styles.comp_card_modal__info__location}>{model.location}</div>

        <div className={styles.comp_card_modal_images}>
          {model.images.map((image, index) => (
            <div key={index} className={styles.comp_card_modal_images__image}>
              <Image src={image} alt={model.fullName} width={300} height={300} />
            </div>
          ))}
        </div>
        <div className={styles.comp_card_modal_carousel}>
          <div className={styles.comp_card__carousel_controls}>
            <button onClick={nextImage} className={styles.comp_card__carousel_controls__prev}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
            </button>
            <button onClick={prevImage} className={styles.comp_card__carousel_controls__next}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
            </button>
          </div>
          <div className={styles.comp_card__carousel}>
            <div className={styles.comp_card__carousel__image}>
              <Image src={model.images[currentImage]} alt="" width={500} height={500}/>
            </div>
          </div>
        </div>
        <div className={styles.comp_card_modal__info}>
          <div className={styles.comp_card_modal__info__text}>Height: {model.height}</div>
          <div className={styles.comp_card_modal__info__text}>Bust: {model.bust}</div>
          <div className={styles.comp_card_modal__info__text}>Hair color: {model.hairColor}</div>
          <div className={styles.comp_card_modal__info__text}>Gender: {model.gender}</div>
          <div className={styles.comp_card_modal__info__text}>Waist: {model.waist}</div>
          <div className={styles.comp_card_modal__info__text}>Eye color: {model.eyeColor}</div>
          <div className={styles.comp_card_modal__info__text}>Shoe size: {model.shoeSize}</div>
          <div className={styles.comp_card_modal__info__text}>Hips: {model.hips}</div>
          <div className={styles.comp_card_modal__info__text}>Ethnicity: {model.race}</div>
        </div>
      </div>
    </div>
  )
}

export default CompCardDetail
