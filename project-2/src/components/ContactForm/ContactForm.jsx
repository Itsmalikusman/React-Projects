import style from './Contact.module.css'

import React from 'react'

const ContactForm = () => {
  return (
    <section
    
    className='{styles.container}>' 
    >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, officia veniam quo dolorem magni id ut! Voluptatum ullam nemo ex natus quisquam eum itaque ipsum nam. Tempora distinctio ipsum iusto?</p>
         <div className={styles.contact_wrapper}>
        <div className={styles.contact_data}>
          <div className={styles.contact_btns}>
            <button className={styles.chat_btn}>
              <img src="project-2/src/assets/chat.svg" alt="Chat Icon" />
              VIA SUPPORT CHAT
            </button>
            <button className={styles.call_btn}>
              <img src="project-2/src/assets/phone.svg" alt="Phone Icon" />
              VIA CALL
            </button>
            <button className={styles.email_btn}>
              <img src="project-2/src/assets/mail.svg" alt="Mail Icon" />
              VIA EMAIL FORM
            </button>
          </div>
          <form className={styles.contact_form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea placeholder="TEXT"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <div className={styles.contact_img}>
          <img
            src="project-2/src/assets/Service.png"
            alt="24/7 Service Illustration"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactForm