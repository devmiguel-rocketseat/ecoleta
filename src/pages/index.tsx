import Link from 'next/link'
import styles from './Home.module.scss'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Header title="Cadastre um ponto de coleta" img="/Login.svg" url="/collectionRegister"/>

      <div className={styles.homepage}>
        <section>
          <h1>Seu marketplace <br /> de coleta de resíduos.</h1>

          <span>Ajudamos pessoas a encontrarem pontos <br /> de coleta de forma eficiente.</span>

          <Link href="/collectPoint">
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
