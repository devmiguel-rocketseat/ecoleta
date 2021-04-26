import Link from 'next/link'
import styles from './Home.module.scss'

import headerStyle from '../styles/header.module.scss'

export default function Home() {
  return (
    <>
      <header className={headerStyle.headerContainer}>
        <img src="/logo.svg" alt="Ecoleta" />

        <Link href="/collectionRegister">
          <button>
            <img src="/login.svg" alt="Login" />
            Cadastre um ponto de coleta
        </button>
        </Link>
      </header>

      <div className={styles.homepage}>
        <section>
          <h1>Seu marketplace <br /> de coleta de resíduos.</h1>

          <span>Ajudamos pessoas a encontrarem pontos <br /> de coleta de forma eficiente.</span>

          <Link href="">
            <button>
              <img src="/buscar.svg" alt="Buscar" />
              <p>Pesquisar pontos de coleta</p>
            </button>
          </Link>
        </section>

        <section>
          <img src="/pessoas.svg" alt="Pessoas" />
        </section>
      </div>
    </>
  )
}
