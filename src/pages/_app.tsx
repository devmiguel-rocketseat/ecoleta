import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { useEffect, useState } from 'react'

import storage from '../util/localstorage'

function MyApp({ Component, pageProps }) {
  const [arrayForm, setArrayForm] = useState(() => {
    const array = storage.get()
    return array
  })
  
  useEffect(() => {
    storage.set(arrayForm)
  }, [arrayForm])

  const addRegister = objForm => {
    setArrayForm([...arrayForm, objForm])
  }

  return (
      <div className={styles.wrapper}>
        <main>
          <Component {...pageProps} addRegister={addRegister} />
        </main>
      </div>
  )
}

export default MyApp
