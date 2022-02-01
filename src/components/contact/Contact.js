import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'

import { Icon } from '@material-ui/core'
import { LinkedIn, Telegram,GitHub } from '@material-ui/icons'

const Contact = () => {
  return (
    <div id="Contact">

 
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/Mandy9943/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon style={{fontSize:"40px"}}>
              <GitHub fontSize='inherit' htmlColor='white' />
            </Icon>
          </a>
          <a
            href="https://www.linkedin.com/in/cesar-martin-0122b8211/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <Icon style={{fontSize:"40px"}}>
              <LinkedIn fontSize='inherit' htmlColor='white' />
            </Icon>
          </a>

          <a
            href="https://t.me/Mandy9943"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon style={{fontSize:"40px"}}>
              <Telegram fontSize='inherit' htmlColor='white' />
            </Icon>
          </a>
        </div>
      </Bounce>
    </Section>
    </div>
  )
}

export default Contact
