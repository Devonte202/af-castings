import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import {formLinks} from "~/components/ContactForm"
import Layout from "~/components/Layout"

import styles from './styles.module.css'

const ContactPage: React.FC = () => {

  // const [activeForm, setActiveForm] = useState(undefined)

  return (
    <Layout>
      <div className={styles.page_hero}>
        <h1 className={styles.page_title}>Contact Us</h1>
        <div className={styles.page_ctas}>
          <button className={styles.page_cta}><Link href={formLinks.ROSTER_FORM} target='_blank'>Become a model</Link></button>
          <button className={styles.page_cta}><Link href={formLinks.PRODUCTION_FORM} target='_blank'>Cast a production</Link></button>
        </div>
        <div className={styles.page_contact_info}>
          <p className={styles.page_contact_text}>afcastingsinfo@gmail.com</p>
          <div className={styles.page_socials}>
            <a href="https://www.instagram.com/afcastings" target="_blank" rel="noreferrer" className={styles.social_link}>
              <Image src="/instagram-logo.png" alt="instagram" width={40} height={40} />
            </a>
            <a href="https://www.tiktok.com/@afcastings" target="_blank" rel="noreferrer" className={styles.social_link}>
              <Image src="/tiktok-logo.png" alt="tiktok" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
      {/* {activeForm && (<div className={styles.form_screen}></div>)}
      {activeForm && (
        <div className={styles.form_container}>
          <button className={styles.form_close} onClick={() => setActiveForm(undefined)}>
            <svg fill="#000000" height={30} width={30} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg>
          </button>
          <ContactForm form={forms[activeForm]} />
        </div>
      )} */}
    </Layout>
  )
}

export default ContactPage
