import Image from 'next/image'

import styles from './styles.module.css'

function ModelCard({ model }) {

  return (
    <div className={styles.model_card}>
      <Image src={model?.images[0]} alt="model" className={styles.model_image} width={200} height={200} />
    </div>
  )
}

export default ModelCard
