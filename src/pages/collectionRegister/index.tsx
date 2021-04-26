import Link from 'next/link'
import styles from './styles.module.scss'

import headerStyle from '../../styles/header.module.scss'

export default function collectionRegister() {
  return (
    <>
      <header className={headerStyle.headerContainer}>
      <img src="/logo.svg" alt="Ecoleta" />

      <Link href="/">
        <button>
          <img src="/voltar.svg" alt="Login" />
          Voltar para Home
        </button>
      </Link>
    </header>

      <div className={styles.containerCadastro}>
        <h1>Cadastro do ponto de coleta</h1>

        <h3>Dados da entidade</h3>

        <form action="">
          <div>
            <label>Nome da entidade</label>
            <input type="text" />
          </div>

          <div>
            <label>Endereço</label>
            <input type="text" />
          </div>

          <div>
            <label>Número</label>
            <input type="text" />
          </div>

          <div>
            <label>Cidade</label>
            <input type="text" />
          </div>

          <div>
            <label>Estado</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </>
  )
}