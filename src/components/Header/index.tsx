
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Ecoleta" />

      <button>
        <img src="/login.svg" alt="Login"/>
        <p>Cadastre um ponto de coleta</p>
      </button>
    </header>
  )
}