'use client'
import Image from "next/image"
import { useState } from "react"

import styles from "./styles.module.css"

type CompCardProps = {
  name: string;
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
}

const CompCard = ({
  name,
  age,
  race,
  height,
  bust,
  waist,
  hips,
  shoeSize,
  hairColor,
  eyeColor,
  images,
  location,
}: CompCardProps) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  return (
    <div className={styles.comp_card}>
      <div className={styles.comp_card__identity}>
        <div className={styles.comp_card__identity__name}>{name}</div>
        <div className={styles.comp_card__identity__age}>Age: {age}</div>
        <div className={styles.comp_card__identity__location}>{location}</div>
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
        <div className={styles.comp_card__carousel__image}>
          <Image src={images[currentImage]} alt="" width={500} height={500}/>
        </div>
      </div>
      <div className={styles.comp_card__bio_info}>
        <div>Height: {height}</div>
        <div>Bust: {bust}</div>
        <div>Waist: {waist}</div>
        <div>Hips: {hips}</div>
        <div>Shoe size: {shoeSize}</div>
        <div>Hair color: {hairColor}</div>
        <div>Eye color: {eyeColor}</div>
        <div>Race: {race}</div>
      </div>
    </div>
  )
}

export default CompCard
