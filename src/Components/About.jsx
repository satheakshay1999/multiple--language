import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation()
  return (
    <div>
        {t('data')}
        {
          t('Aboutus')
        }
    </div>
  )
}

export default About
