import Image from 'next/image'
import { useState } from 'react';

import styles from './styles.module.css'

function ModelCard({ model }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className={styles.model_card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image src={model.images[0]} alt="model" className={styles.model_image} width={200} height={200} />
      <div className={isHovered ? styles.model_info__hovered : styles.model_info}>
        <h3 className={styles.model_description}>{model.fullName}</h3>
        <p className={styles.model_description}>Age: {model.age}</p>
        <p className={styles.model_description}>{model.location}</p>
        <p className={styles.model_description}>Height: {model.height}</p>
        <p className={styles.model_description}>Bust: {model.bust}</p>
        <p className={styles.model_description}>Waist: {model.waist}</p>
        <p className={styles.model_description}>Hips: {model.hips}</p>
        <p className={styles.model_description}>Shoe size: {model.shoeSize}</p>
      </div>
    </div>
  );
}

export default ModelCard
