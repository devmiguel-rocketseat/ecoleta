import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <section>
        <h1>Seu marketplace <br/> de coleta de resíduos.</h1>

        <span>Ajudamos pessoas a encontrarem pontos <br/> de coleta de forma eficiente.</span>

        <button>
          <img src="/buscar.svg" alt="Buscar"/>
          <p>Pesquisar pontos de coleta</p>
        </button>
      </section>

      <section>
        <img src="/pessoas.svg" alt="Pessoas"/>
      </section>
    </div>
  )
}
