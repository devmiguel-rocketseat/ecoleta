import Link from 'next/link'
import styles from './styles.module.scss'

import { Header } from '../../components/Header'

export default function collectionRegister() {
  return (
    <>
      <Header title="Voltar para home" img="/voltar.svg" url="/"/>

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