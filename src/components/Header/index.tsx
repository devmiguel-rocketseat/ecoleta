import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Ecoleta" />

      <Link href="/collectionRegister">
        <button>
          <img src="/login.svg" alt="Login" />
          Cadastre um ponto de coleta
        </button>
      </Link>
    </header>
  )
}