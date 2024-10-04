import React from 'react'

import styles from './styles.module.css'

interface ContactFormProps {
  form: string
}

const formLinks = {
  ROSTER_FORM: 'https://docs.google.com/forms/d/e/1FAIpQLSdKs8nuMoAeDddMB2IYjpfS1UcKiYL2cW1aWyOmL7RCmx31xA/viewform?embedded=true',
  PRODUCTION_FORM: 'https://docs.google.com/forms/d/e/1FAIpQLSd18gBh2Omzk2Z8KDtp-n4TaPvDVyviY8AZAktfJ_O77PegRQ/viewform?embedded=true',
}

export const forms = {
  ROSTER_FORM: 'ROSTER_FORM',
  PRODUCTION_FORM: 'PRODUCTION_FORM',
}

export const ContactForm: React.FC<ContactFormProps> = ({ form }) => {
  return (
    <iframe className={styles.form} src={formLinks[form]}>
      <div className={styles.lds_dual_ring}></div>
    </iframe>
  )
}
