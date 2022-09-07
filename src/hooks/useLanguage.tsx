import React, { useEffect, useState } from 'react'
import { translations } from '../../translations'

const useLanguage = () => {
  const [language, setLanguage] = useState('')
  const [texts, setTexts] = useState(translations)

  useEffect(() => {
    const currentLanguage = localStorage.getItem('language')

    if (currentLanguage) {
      setLanguage(currentLanguage)
      return
    }

    setLanguage('en')
  }, [])

  const translate = (text: string) => {
    if (language === 'en') {
      return text
    }
    return texts[text]
  }


  return {language, setLanguage, translate}
}

export default useLanguage